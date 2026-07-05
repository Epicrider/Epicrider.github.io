// Field Log content. To publish a new post, add an entry to a topic's `posts`
// array (or add a new topic). `id` is displayed as the log number in the index
// and terminal header; keep it unique. `body` is an array of paragraphs.

const blogData = [
  {
    code: 'SYS',
    name: 'Systems Journal',
    posts: [
      {
        id: 'SYS.01',
        title: 'Watching a Car Learn to Wait',
        date: '2026.05.18',
        readout: 'AUTONOMY / BEHAVIOR',
        body: [
          'The hardest thing to teach an autonomous vehicle is not motion. Motion is solved a hundred times over — controllers that track a curve better than any human hand on a wheel. The hard part is stillness: knowing when to do nothing, and for exactly how long.',
          'A human driver at a four-way stop runs a quiet negotiation. Eye contact, a half-roll forward, a wave. A robot has none of those channels, so it has to express intent through the only language it speaks — position and timing. Creep forward eight inches and pause, and suddenly every other driver at the intersection understands you.',
          'Most of my time working on vehicle software has been spent on exactly this class of problem. Not "can the car do the maneuver" but "does the car\'s behavior read as legible to the humans around it." The metric that matters is not path error. It is whether the other driver had to think about you at all.',
          'The lesson generalizes to any system with users: correctness that no one can predict is indistinguishable from a bug.',
        ],
      },
      {
        id: 'SYS.02',
        title: 'Logs Are a Love Letter to Future You',
        date: '2026.02.09',
        readout: 'DEBUGGING / PRACTICE',
        body: [
          'Every debugging war story has the same second act: the moment you realize the information you need was available at runtime, and nobody wrote it down.',
          'I used to treat logging as something you add after the bug — instrument, reproduce, remove. Working on systems that run in the field cured me of that. When the failure happens once, at 3 a.m., on hardware you cannot touch, the log is the crime scene. Either you documented it in advance or you did not.',
          'My rule now: every state transition logs why, not just what. "Switched to fallback controller" is a fact. "Switched to fallback controller: primary exceeded latency budget (47ms > 20ms)" is a diagnosis. The second one costs ten extra characters at write time and saves a day at read time.',
          'Write logs for the version of you who has forgotten everything you currently know. That person is closer than you think.',
        ],
      },
    ],
  },
  {
    code: 'FLD',
    name: 'Field Reports',
    posts: [
      {
        id: 'FLD.01',
        title: 'UAV Forge: Twelve Pounds of Ambition',
        date: '2025.11.02',
        readout: 'UAV / COMPETITION',
        body: [
          'Competition aircraft are designed backwards. You start from the rulebook — payload weight, mission clock, geofence — and work upstream until you arrive at a vehicle. Everything on the airframe is there because a requirement put it there, and everything that is not there was killed in a design review.',
          'On UAV Forge, the thing that surprised me most was how little of the work was flying. For every hour in the air there were forty on integration: making the autopilot, the companion computer, the release mechanism, and the ground station all agree about reality at the same time.',
          'The failure modes were never the ones we brainstormed. We planned for GPS loss and motor-out. What actually got us was a connector that worked on the bench, worked in the parking lot, and gave up only under flight vibration. The fix took ten minutes. Finding it took two weekends.',
          'If I could send one message back to the start of that project: schedule the integration time first, and let the design have whatever is left over. Not the other way around.',
        ],
      },
      {
        id: 'FLD.02',
        title: 'Static Fire Day',
        date: '2025.06.21',
        readout: 'PROPULSION / TEST OPS',
        body: [
          'There is a particular quality to the silence right before a static fire. Everyone has done their checklist. The pad is clear. The countdown is running, and there is nothing left for a human to do except watch and trust the work.',
          'Test day is where engineering culture shows itself. A good team is boring on test day — every question was asked weeks earlier, in review, when asking was cheap. A team that is improvising at the pad already made its mistake, it just has not been delivered yet.',
          'Our burn lasted a handful of seconds. The data review took a week. That ratio felt wrong to me at first — all that preparation for seconds of event. Now I think the ratio is the whole point. The burn is not the product. The burn is the receipt.',
          'The test passed. But I keep thinking about the checklist item that almost was not on the list.',
        ],
      },
    ],
  },
  {
    code: 'OFF',
    name: 'Off Duty',
    posts: [
      {
        id: 'OFF.01',
        title: 'Why This Blog Looks Like Marathon',
        date: '2026.07.04',
        readout: 'DESIGN / META',
        body: [
          'In 1994, Bungie shipped a shooter where the best writing in the game was hidden in computer terminals. You walked up to a screen, the room went quiet, and a rampant AI named Durandal typed at you in green phosphor. No cutscenes. No voice acting. Just text on a terminal, and it was more atmospheric than anything else on the platform.',
          'Three decades later, the Marathon revival went the other direction visually — flat color fields, industrial labels, barcodes, type used like machinery. The art team calls it graphic realism: interfaces that look like they were printed onto equipment by someone who had a job to do.',
          'This page is my tribute to both. The index on the left is the printed manifest — paper, ink, volt green, everything labeled like cargo. The reading pane is the original terminal — black glass, scanlines, phosphor text. Two eras of the same universe, one conversation.',
          'Also, honestly: I wanted a blog I would enjoy opening. Mission accomplished.',
        ],
      },
      {
        id: 'OFF.02',
        title: 'The Games That Made Me an Engineer',
        date: '2025.12.14',
        readout: 'GAMES / ORIGIN STORY',
        body: [
          'Nobody becomes an engineer because of a brochure. In my case it was games — not playing them so much as poking at them, wondering why the physics broke in that one corner of the map, and discovering the config files underneath.',
          'Kerbal Space Program taught me more orbital mechanics than any lecture: you cannot watch a rocket flip end-over-end at 8,000 meters for the tenth time without developing real opinions about center of mass versus center of pressure.',
          'Factorio taught me throughput, backpressure, and why every bottleneck migrates somewhere else the moment you fix it. I did not know the phrase "queueing theory" yet, but I had strong feelings about it.',
          'And Marathon — which you may have noticed around here — taught me that a machine with a personality is more interesting than a machine without one. I have been trying to build machines worth talking to ever since.',
        ],
      },
    ],
  },
]

export default blogData
