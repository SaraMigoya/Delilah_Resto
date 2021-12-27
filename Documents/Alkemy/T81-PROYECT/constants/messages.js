//Generals
const ID_NOT_EXIST = "Invalid ID";
const NAME_REQUIRED = "Name is required";
const NAME_STRING = "Name must be a string";
const DESCRIPTION_REQUIRED = "Description is required";
const DESCRIPTION_STRING = "Description must be a string";
const CONTENT_REQUIRED = "Content is required";
const CONTENT_STRING = "Content must be a string";
const IMAGE_REQUIRED = "Image is required";
const IMAGE_STRING = "Image must be a string";

//Token
const INVALID_TOKEN = "Invalid Token";
const NO_TOKEN = "There is not token in request";

//error pagination
const ERROR_PAGINATION =
  "The page cannot be greater than the number of elements";

// Activities
const ACTIVITY_CREATED = "New activity created succesfully";
const GET_ALL_ACTIVITIES = "Here list of activities";
const FOUND_ACTIVITY = "Found activity";
const ACTIVITY_UPDATED = "Updated activity";
const ACTIVITY_DELETED = "Deleted activity";

//Category
const CATEGORY_CREATED = "New category created succesfully";
const GET_ALL_CATEGORIES = "List of all categories";
const FOUND_CATEGORY = "Category found";
const CATEGORY_UPDATED = "Category updated";
const CATEGORY_DELETED = "Category deleted";
const ERROR_INVALID_CATEGORY_ID = "Invalid category ID";
const CATEGORY_NOT_FOUND = "No Category found";

//Comments
const COMMENT_CREATED = "New comment created succesfully";
const COMMENT_DELETED = "Comment deleted";
const GET_BODY_COMMENTS = "List of all comments";
const FOUND_COMMENT = "Comment found";
const ERROR_INVALID_COMMENT_ID = "Invalid comment ID";
const COMMENT_UPDATED = "Comment updated";
const INVALID_COMMENT_USER = "Current user can't modify this comment";

//Members
const ERROR_INVALID_MEMB_ID = "Invalid Member ID";
const MEMB_NOT_FOUND = "No Members found";
const MEMBER_UPDATED = "Updated member";
const GET_ALL_MEMBERS = "Here list of members";
const MEMBER_CREATED = "New member created succesfully";
const FOUND_MEMBER = "Found member";
const MEMBER_DELETED = "Deleted member";

//news
const ERROR_UPDATE_NEW = "Error updating Novelty";
const ERROR_INVALID_NOVELTY_ID = "Invalid News ID";
const NEW_DELETED = " New deleted ";
const NEW_EDITH = "NEW_EDITH";
const GET_ALL_NEWS = "List of all news";
const FOUND_NOVELTY = "Novelty found";
const NOVELTY_CREATED = "New  Novelty created succesfully";
const NOVELTY_UPDATED = "Novelty updated";



//Organizations
const ADDRESS_STRING = "Address must be a string";
const ALL_ORGANIZATIONS = "List of the organizations";
const ERROR_INVALID_ORG_ID = "Invalid Organization ID";
const ERROR_UPDATE = "Error updating Organization";
const DATA_ORGANIZATION = "Information about the organization";
const ORG_NOT_FOUND = "No organizations found";
const ORGANIZATION_UPDATED = "Organization updated succesfully";
const ORGANIZATION_CREATED = "Organization created succesfully";
const ORGANIZATION_DELETED = "Organization deleted succesfully";
const PHONE_NUMBER = "Phone must be a number";

//Role
const NO_ROLE = "The user doesn't have a role, talk with the admin.";
const NO_ROLE_VALID = "The user doesn't have permissions for this request";

//Slides
const INVALID_FORMAT_IMAGE =
  "The image must be sent in base64 and images types allowed are jpg, jpeg and png";
const INVALID_ORDER = "Invalid order";
const ERROR_AWS = "Error uploading image to AWS S3";
const SLIDE_CREATED = "New slide created succesfully";
const ALL_SLIDES = "List of all the slides";
const SLIDE_UPDATED = "Slide updated succesfully";
const SLIDE_DELETED = "Slide deleted succesfully";
const SLIDE_DETAILS = "Details about the slide requested";

//Users
const INVALID_EMAIL_OR_PASSWORD = "Incorrect email or password.";
const EMAILREGISTERED = "Email is already registered";
const USER_UPDATED = "User updated";
const USER_DELETED = "User deleted";
const SERVER_ERROR = "Internal Server Error, try again later";

//Upload
const UPLOAD_SUCCESSFUL = "Upload successful";

//Contacts
const GET_ALL_CONTACTS = "Here list of contats";
const CONTACT_CREATED = "New contact created succesfully";

module.exports = {
  ID_NOT_EXIST,
  ERROR_INVALID_ORG_ID,
  ORG_NOT_FOUND,
  ALL_ORGANIZATIONS,
  DATA_ORGANIZATION,
  ORGANIZATION_UPDATED,
  ORGANIZATION_CREATED,
  ORGANIZATION_DELETED,
  NAME_REQUIRED,
  NAME_STRING,
  DESCRIPTION_REQUIRED,
  DESCRIPTION_STRING,
  CONTENT_REQUIRED,
  CONTENT_STRING,
  ERROR_UPDATE,
  IMAGE_REQUIRED,
  IMAGE_STRING,
  PHONE_NUMBER,
  ADDRESS_STRING,
  ERROR_INVALID_MEMB_ID,
  MEMB_NOT_FOUND,
  ERROR_UPDATE_NEW,
  ERROR_INVALID_NOVELTY_ID,
  ERROR_PAGINATION,
  INVALID_EMAIL_OR_PASSWORD,
  EMAILREGISTERED,
  USER_UPDATED,
  USER_DELETED,
  SERVER_ERROR,
  INVALID_TOKEN,
  NO_TOKEN,
  NO_ROLE,
  NO_ROLE_VALID,
  NEW_DELETED,
  INVALID_FORMAT_IMAGE,
  INVALID_ORDER,
  ERROR_AWS,
  SLIDE_CREATED,
  SLIDE_UPDATED,
  SLIDE_DELETED,
  SLIDE_DETAILS,
  ALL_SLIDES,
  ACTIVITY_CREATED,
  GET_ALL_ACTIVITIES,
  FOUND_ACTIVITY,
  ACTIVITY_UPDATED,
  ACTIVITY_DELETED,
  CATEGORY_CREATED,
  GET_ALL_CATEGORIES,
  FOUND_CATEGORY,
  CATEGORY_UPDATED,
  CATEGORY_DELETED,
  ERROR_INVALID_CATEGORY_ID,
  CATEGORY_NOT_FOUND,
  UPLOAD_SUCCESSFUL,
  NEW_EDITH,
  COMMENT_CREATED,
  GET_BODY_COMMENTS,
  FOUND_COMMENT,
  ERROR_INVALID_COMMENT_ID,
  COMMENT_UPDATED,
  INVALID_COMMENT_USER,
  COMMENT_DELETED,
  GET_ALL_NEWS,
  FOUND_NOVELTY,
  NOVELTY_CREATED,
  NOVELTY_UPDATED,
  MEMBER_UPDATED,
  GET_ALL_MEMBERS,
  MEMBER_CREATED,
  MEMBER_DELETED,
  FOUND_MEMBER,
  CONTACT_CREATED,
  GET_ALL_CONTACTS
};
