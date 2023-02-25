import { NewBlogPostCreated, NewAudioPostCreated, NewVlogPostCreated } from "../generated/Web3Cms/Web3Cms"
import { BlogPostEntity, VlogPostEntity, AudioPostEntity } from "../generated/schema"

export function handleNewBlogPostCreated(event: NewBlogPostCreated): void {
  let entity = BlogPostEntity.load(event.params.postId.toHex())
  if (!entity) {
    entity = new BlogPostEntity(event.params.postId.toHex())
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

export function handleNewAudioPostCreated(event: NewAudioPostCreated): void {
  let entity = AudioPostEntity.load(event.params.postId.toHex())
  if (!entity) {
    entity = new AudioPostEntity(event.params.postId.toHex())
    entity.postId = event.params.postId
    entity.nameOfPost = event.params.nameOfPost
    entity.postDescription = event.params.postDescription
    entity.thumbnailUrl = event.params.thumbnailUrl
    entity.postContent = event.params.postContent
    entity.postDate = event.params.date
    entity.audioThumbnail = event.params.audioThumbnail
    entity.audioTitle = event.params.audioTitle
    entity.audioUrl = event.params.audioUrl
    entity.owner = event.params.owner
  }
  entity.save()
}

export function handleNewVlogPostCreated(event: NewVlogPostCreated): void {
  let entity = VlogPostEntity.load(event.params.postId.toHex())
  if (!entity) {
    entity = new VlogPostEntity(event.params.postId.toHex())
    entity.postId = event.params.postId
    entity.nameOfPost = event.params.nameOfPost
    entity.postDescription = event.params.postDescription
    entity.thumbnailUrl = event.params.thumbnailUrl
    entity.postContent = event.params.postContent
    entity.postDate = event.params.date
    entity.videoThumbnail = event.params.videoThumbnail
    entity.videoTitle = event.params.videoTitle
    entity.videoUrl = event.params.videoUrl
    entity.owner = event.params.owner
  }
  entity.save()
}