"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import  JWTManager, create_access_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


bcrypt = Bcrypt()


@api.route('/signup', methods=['POST'])
def singup_user():
  try:
    user_data = request.json
    existing_user = User.query.filter_by(email=user_data['email']).first()
    print(existing_user)
    if existing_user:
      return jsonify({"error": "This email is already register"}), 409
    
    encrypted_password = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
    
    new_user = User(
      name = user_data['name'],
      email = user_data['email'],
      password = encrypted_password
    )
    
    db.session.add(new_user)
    db.session.commit() 
    return jsonify(new_user.serialize()), 201
  except Exception as e:
    return jsonify({"error": str(e)}), 500

#login
@api.route('/login', methods=['POST'])
def login():
  try:
    user_data = request.json
    if not user_data:
      return jsonify({"error":"Fields required"}), 400
    
    login_user = User.query.filter_by(email = user_data['email']).first()
    if not login_user:
      return jsonify({"error": "Email not exist"}), 404
    
    password_db = login_user.password
    check_user_validate = bcrypt.check_password_hash(password_db, user_data['password'])
    if check_user_validate:
      user_id = login_user.id
      access_token = create_access_token(identity=user_id)
      return jsonify({'access token': access_token, 'name': login_user.name, 'email': login_user.email}), 200
  except Exception as e:
    return jsonify({"error": str(e)}), 400
    