// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Web3Cms {

    event NewPostCreated(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        address owner
    );

    struct NewPost {
        bytes32 postId;
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        address owner;
    }

    mapping (bytes32 => NewPost) public idToNewPost;

    function createNewPost(
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
        
        idToNewPost[postId] = NewPost(
            postId,
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            msg.sender
        );

        emit NewPostCreated(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, msg.sender);
    }
}