import {
    setPosts,setSelectedPost,postDetails,
    createNewUser, createPosts,createComment,postVoteUp,postVoteDown,postVoteZero
  } from "./allActions";

  describe("All Actions", () => {
    test(" setPosts", () => {
        const expectedResult = {
            type: "SET_POSTS",
            payload: {
                posts: []
            }
          };
          const result = setPosts([]);
          expect(expectedResult).toMatchObject(result);
        });

    test(" setSelectedPost", () => {
        const mockID = {postid=1}
        const expectedResult = {
            type: "SET_SELECTED_POST",
            payload: {
                postId: mockID
            }
          };
          const result = setSelectedPosts(mockID);
          expect(expectedResult).toMatchObject(result);
        });    
  

  });