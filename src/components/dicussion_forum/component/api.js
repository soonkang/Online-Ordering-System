export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Absolutely divine experience! Every dish was a work of art," + 
              "bursting with flavor and perfectly presented. Impeccable service and a stunning ambiance."+ 
              "Definitely worth every penny!",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2024-1-20T05:00:33.010+08:00",
      },
      {
        id: "2",
        body: "A culinary journey unlike any other!" + 
              "The attention to detail in every aspect of our meal was unparalleled."+ 
              "The staff was knowledgeable and attentive, making our dining experience truly memorable.",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2023-12-20T12:00:33.010+08:00",
      },
      {
        id: "3",
        body: "Wow! This restaurant exceeded all expectations." + 
              "The attention to detail in every aspect of the dining experience was remarkable."+ 
              "Each dish was a symphony of flavors, leaving us craving more. Can't wait to return!",
        username: "James",
        userId: "2",
        parentId: "1",
        createdAt: "2023-11-30T10:00:33.010+08:00",
      },
      {
        id: "4",
        body: "Absolutely phenomenal! From the moment we walked in, we knew we were in for a treat."+
              "The ambiance was elegant, the service was impeccable, and the food was out of this world."+ 
              "A true gem in the world of fine dining!",
        username: "Jonathan",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Keith",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };