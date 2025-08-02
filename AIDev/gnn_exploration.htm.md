# GNN Exploration

For my 'Useful AI' youtube video
      
(You can see on the 'My Introduction' page)

I made a couple GNN sctructures to help describe how GNNs and MPNNs work visually,
      
   But mispoke on how Two-Tower AIs and MPNNs work in Social Networks.
      
So I cut the section on GNNs and MPNNs,
      
   And figured I'd share the cut content here--

GNNs are Graph Neural Networks,
        
And MPNNs are Message Passing Neural Networks.
        
Both are types of neural networks,
        
which consider the relationships between data points.
        
But MPNNs send messages between connected node neighbors-of-neighbors to update node states.

The newer 'Algorithm' is likely a Two-Towers AI where two AIs work together to figure out your preferences.
        
In the case of Social Media sites like Instagram, YouTube, etc.
        
One AI understands the User, and images/video content in the other.
        
Working to compare two sets of data for similarity or 'potential connection'.
        
Like suggesting images/videos to view based on what you like, watch-time, or search for.

Back to GNNs and MPNNs,
      
This structure can be used to predict connections between ideas / things / data in a system.

      While looking into Peter Velickovic's work on GNNs,
      
   Saw a paper on mimicing a Dyjkstra Path Finding algorithm using a GNN.
      
The first video shown here is a test of that paper,
      
   With my own implementation.

      Then decided it would be best to show a better use case for GNNs.
      
   To show off their capibilities in what they're best at.

So I set up an 'online matchmaking' system,
      
   Showing a simple single pass of detecting connections between nodes.

It asks all of the connected nodes for their 'player stats' for a new game,
      
   Having individual stats 'shift' per game to mimic a player acting differently per game.

Example Player Stats:
      
  - Name: 'P1' or 'Player 1'
      
  - Offense: 0.80
      
  - Support: 0.40
      
  - Tank: 0.20
      
  - Engineer: 0.65

 The values will be used to find other players that have supportive traits,
      
   Helping to construct a team of players that can work together.

 The third video is showing a better representation of a GNN,
      
   Here the nodes have dashed orange lines to show the 'potential teammates' between nodes.

Multiple messages get sent between neighbors before the final 'prediction' is made.
      
   And the 'prediction' is the final team of 4 players that should help build a balanced team, connected in Red.

It's pretty interesting to me,
      
Seeing these changes in potential teammates as the game rounds progress.
      
   As the players change their stats, the potential teammates change between game rounds.

I'd like to imaginge some multiplayer games are using these type of statistics to help build teams.
      
   Most games have "stat screens" that show off a player's stats,
      
   But I wonder if they use these stats to help build teams.

Most seem to go off XP,
      
   But I'm sure the systems are more complex than that.