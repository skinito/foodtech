require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "testing div" do
    get root_path
    assert_select "h1", "Welcome to foodtech MTP"
    assert_select ".box", count:3
    assert_select "input", count:4
    assert_select "img", count:4
  end
end
