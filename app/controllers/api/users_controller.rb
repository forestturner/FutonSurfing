class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    p @user
    if @user.save
      login(@user)
      render "api/users/show"
      # render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    currentUser.find(params[:id])

  private
  def user_params
    params.require(:user).permit(:username,:password, :firstname,:lastname, :email, :profile_img_url)
  end
end
