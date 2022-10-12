import { NewPostCreated } from "../generated/Web3Cms/Web3Cms"
import { PostEntity } from "../generated/schema"

export function handleNewPostCreated(event: NewPostCreated): void {
  let entity = PostEntity.load(event.params.postId.toHex())
  if (!entity) {
    entity = new PostEntity(event.params.postId.toHex())
    entity.postId = event.params.postId
    entity.nameOfPost = event.params.nameOfPost
    entity.postDescription = event.params.postDescription
    entity.thumbnailUrl = event.params.thumbnailUrl
    entity.postContent = event.params.postContent
    entity.postDate = event.params.date
    entity.owner = event.params.owner
  }
  entity.save()
}