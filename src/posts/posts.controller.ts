import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'

@Controller('posts')
export class PostsController {
  @Get()
  findAll(@Query('title') searchTitle: string): any[] {
    const posts = [
      { id: 1, title: 'What is motion design?', content: 'Content 1' },
      { id: 2, title: 'What is UI design?', content: 'Content 2' },
      { id: 3, title: 'What is UX design?', content: 'Content 3' },
    ]

    if (searchTitle) {
      return posts.filter((predicate) =>
        predicate.title.toLowerCase().includes(searchTitle.toLowerCase()),
      )
    }
    return posts
  }

  @Get(':id')
  findOne(@Param() { id }: { id: number }): string {
    return `This action returns a post ${id}`
  }

  @Post()
  create(@Body() { email, password }: any): any {
    return { userEmail: email, userPassword: password }
  }
}
