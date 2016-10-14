class ProfileController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = current_user
  end

  def update
    current_user.update(user_params)
  end


  private
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
