# LIBRARIES
require 'bacon'
require 'net/http'
require 'net/imap'
require 'net/smtp'
require 'uri'
require 'mysql2'
require 'json'
require 'mechanize'
require 'mailfactory'
require 'mail'
require './libs.rb'
require './scripts.rb'

# TESTS
require './system/init-settings.rb'
require './system/get-settings.rb'
require './system/edit-settings.rb'
require './user/signup.rb'
require './user/login.rb'
require './user/send-recover-password.rb'
require './user/recover-password.rb'
require './user/edit-password.rb'
require './user/edit-email.rb'
require './user/get.rb'

require './user/enable-disable.rb'
require './ticket/create.rb'
require './ticket/seen.rb'
require './ticket/comment.rb'
require './ticket/get.rb'
require './ticket/custom-response.rb'
require './ticket/change-department.rb'
require './ticket/close.rb'
require './ticket/re-open.rb'
require './ticket/delete.rb'
require './staff/invite.rb'
require './staff/get.rb'
require './staff/edit.rb'
require './staff/delete.rb'
require './staff/assign-ticket.rb'
require './staff/un-assign-ticket.rb'
require './staff/get-tickets.rb'
require './staff/get-new-tickets.rb'
require './staff/get-all-tickets.rb'
require './ticket/events.rb'
require './article/topic.rb'
require './article/article.rb'
require './user/get-user.rb'
require './user/ban.rb'
require './user/get-users-test.rb'
require './user/delete.rb'
require './staff/get-all.rb'
require './system/add-department.rb'
require './system/edit-department.rb'
require './system/delete-department.rb'
require './staff/last-events.rb'
# require './system/mail-templates.rb'
require './system/add-api-key.rb'
require './system/delete-api-key.rb'
require './system/get-api-keys.rb'
require './system/disable-registration.rb'
require './system/enable-registration.rb'
require './system/file-upload-download.rb'
require './system/csv-import.rb'
require './ticket/create-tag.rb'
require './ticket/edit-tag.rb'
require './ticket/get-tags.rb'
require './ticket/delete-tag.rb'
require './ticket/add-tag.rb'
require './ticket/delete-tag.rb'
require './ticket/edit-comment.rb'
require './ticket/edit-title.rb'
require './system/custom-fields.rb'
require './ticket/search-authors.rb'
require './ticket/search.rb'
require './ticket/get-authors.rb'
require './system/mandatory-login.rb'
require './system/default-department.rb'
require './user/edit-supervised-list.rb'
require './user/get-supervised-tickets.rb'
# require './system/get-stats.rb'
