const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Introduction",
  "description": "AI Introduction by ProcStack, focusing on the journey of AI development and the exploration of various neural network structures.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Echo State Network, ESN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/aiIntro.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "aiIntro.htm",
  'name' : 'My Introduction',
  'lastModified' : '2025-08-01',
  'media' : [
    {
      'type' : 'youtube',
      'src' : 'XJu-UJrI6yk',
      'alt' : 'Useful AI for Visual Graphics',
      'description' : 'An intro video to MDE, ESRGAN, & Pose Estimation for Visual Graphics.',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle']
    }
  ],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      I started my dive into AI in 2008 writing a Boid / Crowd system for my thesis while in art college, School of Visual Arts.
      <br>&nbsp;&nbsp; It was an insane particle script + 3d animation cycles in Maya haha.
      <br>Then I did Boid movement, navigation, & obstacle detection in animated films for 5 years at Blue Sky Studios, using Houdini.
      <br>
      <br>I dove into Style-Transfer AI & Long Short-Term Memory (LSTM) training in 2019-2020,
      <br>&nbsp;&nbsp; Like making a Node.js server (web site) understand my voice & auto google search for me.
      <br>
      <br>Since then, I've been developing different multi-media AI structures in my spare time.
      <br>
      <br><div class='procPagesAboutMeBar'></div>

      <br>In 2015 I decided I'd cram a machine learning AI into a single-board computer, a Jetson TK1, by the end of 2026.
      <br>&nbsp;&nbsp; Something that could write down what I say,
      <br>&nbsp;&nbsp; Use vision to understand an object simply went out of frame.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Yet "knows" if it looks over, the object is still there; 'Attention'
      <br>
      <br>At the end of 2023, this evolved into a deep learning AI crammed into, likely, a Jetson Nano.
      <br>&nbsp;&nbsp; As something to infer what I mean, from what I say,
      <br>&nbsp;&nbsp; Or give a "thought" on what it saw or heard in the world around it.
      <br>

      <br><span class="innerCenter">
        'Machine Learning' is AI that can learn basic patterns.
        <br>'Deep Learning' is Machine Learning,
        <br>But uses neural networks to form patterns of patterns.
      </span>

      <br>
      <br>Realistically, I'd just be happy to make something that can understand what I say and can give a <span class='textItalic'>semi</span> coherent response without an internet connection.
      <br>
      <br>As of May 24th 2025, I've started on the core of the AI,
      <br>&nbsp;&nbsp; But still testing different structure's ability in adapting to stimuli.
      <br>&nbsp;&nbsp; ... It really seems like any network could work for most things, but some are better than others per task.
      <br>

      <br><span class="innerCenter">
        You could guess,
        <br>All the recent AI stuff has been quite serendipitous for my creation!
      </span>
    </div>
  `,
};