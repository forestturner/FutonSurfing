class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  def logged_in?
    !!current_user
  end
  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end
  def ensure_logged_in
  unless current_user
    render json: ["Forbidden"], status: 404
  end
end
  def ensure_not_logged_in
    if current_user
      render json: ["Already logged in"], status: 403
    end
  end
  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
