Texture files can be included/embeded within the FBX,
  But its advised against doing that.
There is some image management done in pxlNav for easier accessibility to shared resources
  Being, if an already loaded image is requested again,
	  The same javascript memory object is used.
Please ensure files are requesting local/relative path'ed texture files,
  In your 3d program of choice.