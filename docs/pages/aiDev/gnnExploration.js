const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GNN Exploration",
  "description": "GNN Exploration by ProcStack, building different Graph Neural Networks (GNN) and testing their application in understanding data.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Neural Network, GNN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/gnn_exploration.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "gnn_exploration.htm", 
  'name' : 'GNN Exploration',
  'title' : 'GNN Exploration',
  'lastModified' : '2025-08-02',
  'schemaData' : shemaData,
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/shortest_path_propagation.webm',
      'alt' : "MPNN Shortest Path Propagation",
      'style' : ['procPagesMediaStyle','setAspectRatio_2_1'],
      'caption' : ["A shortest path propagation in a Message Passing Neural Network (MPNN).",
      ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/mpnn_team_formation_links.webm',
      'alt' : "Complex MPNN Team Formation",
      'style' : ['procPagesMediaStyle','setAspectRatio_2_1'],
      'caption' : ["A MPNN team formation with multiple messages sent between nodes.",
      ]
    },
  ],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      <br>I made a couple GNN sctructures to help show how GNNs and MPNNs work visually,
      <br>&nbsp;&nbsp; Mostly just to help me understand them.
      
      <br>
      <br><span class="innerCenter">GNNs are Graph Neural Networks,
      <br>And MPNNs are Message Passing Neural Networks.
      <br>Both are types of neural networks,
      <br>which consider the relationships between data points.
      <br>But MPNNs send messages between connected node neighbors-of-neighbors to update node states.
      <div class='procPagesAboutMeSpacer'></div>
      </span>
      
      <br>They are AI networks that can be used to predict connections between ideas / things / data in a system.
      
      <div class='procPagesAboutMeSpacer'></div>

      <div class='procPagesAboutMeSpacer'></div>
      While looking into Peter Velickovic's work on GNNs,
      <br>&nbsp;&nbsp; Saw a paper on mimicing a Dyjkstra Path Finding algorithm using a GNN.
      <br>The first video shown here is a test of that paper,
      <br>&nbsp;&nbsp; With my own implementation.

      <br>
      <div class='procPagesAboutMeSpacer'></div>
      Then decided it would be best to show a better use case for GNNs.
      <br>&nbsp;&nbsp; To show off their capibilities in what they're best at.
      <div class='procPagesAboutMeSpacer'></div>
      <br>
      <br>So I set up an 'online matchmaking' system,
      <br>&nbsp;&nbsp; Showing neurons send multiple messages between connected nodes.

      <br>
      <br> Here the nodes have dashed orange lines to show the 'potential teammates' between nodes.
      
      <br>
      <br>Multiple messages get sent between neighbors before the final 'prediction' is made.
      <br>&nbsp;&nbsp; And the 'prediction' is the final team of 4 players that should help build a balanced team, connected in Red.

      <br>
      <br>It asks all of the connected nodes for their 'player affinity' for a new game,
      <br>&nbsp;&nbsp; Having individual stats 'shift' per game to mimic a player acting differently per game.
      <br>&nbsp;&nbsp; Then to use those stats to find 'potential teammates' for a balanced team.

      <br>
      <br>Example Player Stats:
      <br>&nbsp; - Name: 'P1' or 'Player 1'
      <br>&nbsp; - Offense: 0.80
      <br>&nbsp; - Support: 0.40
      <br>&nbsp; - Tank: 0.20
      <br>&nbsp; - Engineer: 0.65

      <br>
      <br> The values will be used to find other players that have supportive traits,
      <br>&nbsp;&nbsp; Helping to construct a team of players that can work together.

      <br>
      <br>This becomes the core influence on the messages sent between nodes.
      <br>&nbsp;&nbsp; Which contains 'Team Affinity', 'Role Balance', 'Skill Match' and 'Selection Confidence'.

      <br>
      <br>These 4 values are what's sent between nodes to help determine if a player is 'willing' to change teams,
      <br>&nbsp;&nbsp; Influenced by the neighbor-of-neighbor player's stats.

      <br>
      <br>It's pretty interesting to me,
      <br>&nbsp;&nbsp; Seeing these changes in potential teammates as the game rounds progress.
      <br>&nbsp;&nbsp; As the players change their stats, the potential teammates change between game rounds.

      <div class='procPagesAboutMeSpacer'></div>

      <br>
      <br>I'd like to imaginge some multiplayer games are using these type of statistics to help build teams.
      <br>&nbsp;&nbsp; Most games have "stat screens" that show off a player's stats,
      <br>&nbsp;&nbsp; But I wonder if they use these stats to help build teams.
      
      <br>
      <br>Most seem to go off XP,
      <br>&nbsp;&nbsp; But I'm sure the systems are more complex than that.

    </div>
  `,
};