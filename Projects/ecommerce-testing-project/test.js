from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://example-ecommerce.com")

# Test login functionality
driver.find_element(By.ID, "login").click()
driver.find_element(By.NAME, "username").send_keys("testuser")
driver.find_element(By.NAME, "password").send_keys("password")
driver.find_element(By.ID, "submit").click()

# Verify login
assert "Welcome, testuser" in driver.page_source

driver.quit()