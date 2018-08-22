require 'test_helper'

class FoodControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_path
    assert_response :success
    assert_select "title", "StartupFoodtech"

  end

end
