// frame.io context

function FrameioContext(input = { resource: {}, project: {}, user: {} }, settings = {}) {

    if (settings.debug) console.log(input)

    this.name = "frameio"
    this.action = input.type
    this.project = input.project.id
    this.resource = {
      id: input.resource.id,
      type: input.resource.type
    }
    this.user = {
      id: input.user.id
    }
    this.message = undefined
    
    switch (this.action) {
      case undefined:
        break;
      case "comment.created":
        this.message = "new comment"
        break
      case "reviewlink.created":
        this.message = "new review link created"
        break
      case "asset.created":
        this.message = "asset added.  transcoding..."
        break
      case "asset.ready":
        this.message = "transcoding finished! asset is ready"
        break
      default:
        console.log("new activity")
        break
    };
    
  }; // END FrameioContext

  module.exports = FrameioContext