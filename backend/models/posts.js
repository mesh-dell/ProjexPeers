import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  likes: [
    {
      username: {
        type: String,
        trim: true,
      },
    },
  ],
  profilePic: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
      required: false,
    },
  ],
  year: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  competitionType: {
    type: String,
    required: false,
  },
  membersRequired: {
    type: String, 
    required: false,
  },
  lastDateOfRegistration: {
    type: Date, 
    required: false,
  }
});

postSchema.methods.upvote = async function (username) {
  try {
    this.likes = this.likes.concat({ username: username });
    await this.save();
    return this.likes;
  } catch (e) {
    console.log(`Failed to Upvote --> ${e}`);
  }
};

postSchema.methods.downvote = async function (username) {
  try {
    this.likes = this.likes.filter((elem) => {
      return elem.username !== username;
    });

    console.log(this.likes);
    await this.save();
    return this.likes;
  } catch (e) {
    console.log(`Failed to Downvote --> ${e}`);
  }
};

const Posts = mongoose.model("Post", postSchema);

export default Posts;