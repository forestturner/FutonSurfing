require "byebug"
class Api::UsersController < ApplicationController
  def index()
    @users = User.all
    render :index
  end
  def show()
    @user = User.find(params[:id])
  end

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
    @user = User.find_by(id: params[:id])
    if @user.update(user_params )
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = user.find_by(id: params[:id])
    @user.destroy
    render json: {}
  end


  private
  def user_params
    params.require(:user).permit(:username,:password, :firstname,:lastname, :email, :profile_img_url, :description , :futon, :rented_futon, :booking, :id, :futon)
  end
end
