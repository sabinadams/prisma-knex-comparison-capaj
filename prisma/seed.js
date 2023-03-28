const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const favorites = [
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 74277
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 74400
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 84433
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 88374
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 89165
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 91438
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 93217
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 93484
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 98371
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 102288
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 103682
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 106184
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 106406
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 114417
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 118624
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 131299
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 212780
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 232009
  },
  {
    aws_user_id: "c609097c-9d6d-470f-b3f6-200f52e19fe4",
    post_id: 242949
  },
  {
    aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
    post_id: 254340
  }
]

  const createMany = await prisma.favorites.createMany({
    data: favorites,
  })
  console.log({ createMany })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })