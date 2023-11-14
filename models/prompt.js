const { Schema, model } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = model.Prompt || model("Prompt", PromptSchema);

export default Prompt;
