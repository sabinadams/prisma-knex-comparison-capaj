'use strict';

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
})

async function run() {

  let where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 74277
  }
  let favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 74400
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 84433
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 88374
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 89165
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 91438
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 93217
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })


  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 93484
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 98371
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 102288
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 103682
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })


  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 106184
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 106406
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 114417
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })


  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 118624
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 131299
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 212780
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 232009
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 242949
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  where = {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 254340
  }
  favorite = await knex('favorites').where(where).first('id')
  console.log({ favorite })

  await knex.destroy()
}

run()