
export const pageListingData = {
  'name' : 'pxlCam',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_treeStump.jpg',
      'alt' : 'Trippy tree stump',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_trainTracks.jpg',
      'alt' : 'Train track edges',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_fungi.jpg',
      'alt' : 'Fungi on a log',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_treeBark.jpg',
      'alt' : 'Funky tree bark',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_empireStateBuilding.jpg',
      'alt' : 'Tweaked Empire State Building',
      'style' : 'procPagesImageStyle'
    },
  ],
  'content' : `
      <div class="procPagesProjectsHeaderStyle"><a href='https://pxlmancer.com/gl/pxlCam' class="textBump" target='_blank'>pxlCam</a></div>
      <div class="procPagesProjectsDescriptionStyle">  <span class="textNudge">*Use on phone!!*</span>
        <br>&nbsp;&nbsp;&nbsp;&nbsp; A few day project.
        <br>&nbsp;&nbsp; A custom photo filter site with interactive color and edge effects opengl shaders, using three.js for gpu access, and your multiple phone cameras in-browser.
        <br>&nbsp;&nbsp; Tap the triple down arrow to change the filter.  Tap and drag left & right or up & down to change the current filter's hue & saturation or edge detection size & brightness
      </div>
  `,
};