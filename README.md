
#chat-space DB設計

##  usersテーブル  
｜Column｜Type｜Options｜
|------|----|------|
|name |string|null: false|
|e-mail|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|--------|
|messages|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
-belongs_to :user
-belongs_to :group

## groups
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
### Association
-has_many :users
-has_many :messages
-has_many :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user