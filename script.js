const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  let favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 74277
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 74400
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 84433
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 88374
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 89165
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 91438
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 93217
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })


  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 93484
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 98371
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 102288
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 103682
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })


  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 106184
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 106406
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 114417
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })


  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 118624
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 131299
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 212780
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 232009
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 242949
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

  favorite = await prisma.favorites.findFirst({
    where: {
      aws_user_id: 'c609097c-9d6d-470f-b3f6-200f52e19fe4',
      post_id: 254340
    },
    select: {
      id: true
    }
  })
  console.log({ favorite })

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