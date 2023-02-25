// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Web3Cms {

    event NewAudioPostCreated(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        string audioTitle,
        string audioUrl,
        string audioThumbnail,
        address owner
    );

    event NewBlogPostCreated(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        address owner
    );

    event NewVlogPostCreated(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        string videoTitle,
        string videoUrl,
        string videoThumbnail,
        address owner
    );

    struct NewAudioPost {
        bytes32 postId;
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        string audioTitle;
        string audioUrl;
        string audioThumbnail;
        address owner;
    }

    struct NewBlogPost {
        bytes32 postId;
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        address owner;
    }

    struct NewVlogPost {
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        string videoTitle;
        string videoUrl;
        string videoThumbnail;
        address owner;
    }

    mapping (bytes32 => NewAudioPost) public idToNewAudioPost;
    mapping (bytes32 => NewBlogPost) public idToNewBlogPost;
    mapping (bytes32 => NewVlogPost) public idToNewVlogPost;

    function createNewAudioPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata date,
        string calldata audioTitle,
        string calldata audioUrl,
        string calldata audioThumbnail
    ) internal {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewAudioPost[postId] = NewAudioPost(
            postId,
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            audioTitle,
            audioUrl,
            audioThumbnail,
            msg.sender
        );

        emit NewAudioPostCreated(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, audioTitle, audioUrl, audioThumbnail, msg.sender);
    }

    function createNewBlogPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata date
    ) external {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewBlogPost[postId] = NewBlogPost(
            postId,
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            msg.sender
        );

        emit NewBlogPostCreated(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, msg.sender);
    }

    function createNewVlogPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata date,
        string calldata videoTitle,
        string calldata videoUrl,
        string calldata videoThumbnail
    ) internal {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewVlogPost[postId] = NewVlogPost(
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            videoTitle,
            videoUrl,
            videoThumbnail,
            msg.sender
        );

        emit NewVlogPostCreated(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, videoTitle, videoUrl, videoThumbnail, msg.sender);
    }

}