/*
  PT 179 - Psychological Disorder Prediction System
  Reference data for an educational classroom prototype.

  IMPORTANT:
  These entries are educational references, not diagnostic criteria.
  Phrase matching is not a clinical assessment.
*/


// ==========================================
// PROJECT TEAM
// ==========================================

const TEAM = [
  {
    name: "Charu Arora",
    id: "2410030544"
  },
  {
    name: "Piyush Rarh",
    id: "2410030920"
  },
  {
    name: "Aditya Naam Prakash Jaiswal",
    id: "2410031631"
  }
];


// ==========================================
// PSYCHOLOGICAL REFERENCE CATEGORIES
// TOTAL: 25
// ==========================================

const CATEGORIES = [

  // 01. Depressive Disorders
  {
    id: "depression",
    name: "Depressive disorders",
    group: "Mood-related",

    terms: [
      "sad",
      "sadness",
      "hopeless",
      "empty",
      "worthless",
      "no interest",
      "lost interest",
      "don't enjoy",
      "dont enjoy",
      "low mood",
      "depressed",
      "no motivation",
      "no energy"
    ],

    about: "Depressive disorders involve persistent changes in mood and/or loss of interest that can affect daily functioning. Only a qualified professional can assess whether diagnostic criteria are met.",

    signs: [
      "Persistent low mood",
      "Reduced interest or pleasure",
      "Changes in sleep or appetite",
      "Low energy or concentration difficulties"
    ],

    support: "Professional assessment and evidence-based care may include psychotherapy, medication when appropriate, and practical social support."
  },


  // 02. Generalized Anxiety Disorder
  {
    id: "generalized-anxiety",
    name: "Generalized anxiety disorder",
    group: "Anxiety-related",

    terms: [
      "worry",
      "worried",
      "constant worry",
      "can't stop worrying",
      "cant stop worrying",
      "on edge",
      "restless",
      "tense",
      "anxious",
      "anxiety"
    ],

    about: "Generalized anxiety disorder involves excessive, difficult-to-control worry across different areas of life. Ordinary worry alone does not establish this condition.",

    signs: [
      "Frequent excessive worry",
      "Feeling restless or keyed up",
      "Muscle tension",
      "Sleep or concentration difficulty"
    ],

    support: "A clinician can assess the duration, intensity and impact of worry. Psychotherapy and other evidence-based options may help."
  },


  // 03. Social Anxiety Disorder
  {
    id: "social-anxiety",
    name: "Social anxiety disorder",
    group: "Anxiety-related",

    terms: [
      "social situations",
      "fear of people",
      "judged",
      "being judged",
      "embarrassed",
      "embarrassment",
      "public speaking",
      "avoid people",
      "social anxiety"
    ],

    about: "Social anxiety disorder involves significant fear of social situations where a person may feel scrutinized or negatively evaluated.",

    signs: [
      "Fear of negative evaluation",
      "Avoidance of some social situations",
      "Strong distress before or during interactions"
    ],

    support: "A mental health professional can help assess social fears. Cognitive behavioural therapy is one established treatment approach."
  },


  // 04. Panic Disorder
  {
    id: "panic",
    name: "Panic disorder",
    group: "Anxiety-related",

    terms: [
      "panic attack",
      "panic attacks",
      "sudden fear",
      "heart racing",
      "racing heart",
      "shortness of breath",
      "fear of dying",
      "fear of losing control"
    ],

    about: "Panic disorder involves recurrent unexpected panic attacks and ongoing concern or behaviour changes related to further attacks. Similar physical symptoms can have other causes.",

    signs: [
      "Episodes of intense fear",
      "Rapid heartbeat or breathlessness",
      "Fear of another attack"
    ],

    support: "New or severe physical symptoms should be medically assessed. A clinician can evaluate panic symptoms and discuss treatment."
  },


  // 05. Specific Phobia
  {
    id: "specific-phobia",
    name: "Specific phobia",
    group: "Anxiety-related",

    terms: [
      "phobia",
      "terrified of",
      "fear of heights",
      "fear of flying",
      "fear of spiders",
      "fear of dogs",
      "fear of needles"
    ],

    about: "A specific phobia is an intense fear of a particular object or situation that can lead to avoidance and distress.",

    signs: [
      "Marked fear of a specific trigger",
      "Avoidance of the trigger",
      "Fear disproportionate to the actual danger"
    ],

    support: "A professional can assess the fear and discuss gradual, supported exposure-based treatment."
  },


  // 06. Obsessive-Compulsive Disorder
  {
    id: "ocd",
    name: "Obsessive-compulsive disorder",
    group: "Obsessive-compulsive related",

    terms: [
      "intrusive thoughts",
      "unwanted thoughts",
      "compulsively",
      "compulsion",
      "compulsions",
      "checking again",
      "check repeatedly",
      "wash my hands repeatedly",
      "repeated checking",
      "obsessive"
    ],

    about: "OCD can involve intrusive, unwanted thoughts or urges and repetitive behaviours or mental acts performed to reduce distress. Repetitive habits alone do not establish OCD.",

    signs: [
      "Intrusive unwanted thoughts",
      "Repetitive behaviours or mental rituals",
      "Significant distress or time burden"
    ],

    support: "A qualified professional can assess these experiences. Evidence-based care can include exposure and response prevention and, when appropriate, medication."
  },


  // 07. Post-Traumatic Stress Disorder
  {
    id: "ptsd",
    name: "Post-traumatic stress disorder",
    group: "Trauma- and stressor-related",

    terms: [
      "flashback",
      "flashbacks",
      "nightmares about",
      "trauma",
      "traumatic event",
      "reliving",
      "hypervigilant",
      "on guard",
      "avoid reminders"
    ],

    about: "PTSD may develop after exposure to a traumatic event and can involve intrusive memories, avoidance, changes in mood or thinking, and heightened arousal.",

    signs: [
      "Intrusive memories or nightmares",
      "Avoidance of reminders",
      "Feeling constantly on guard",
      "Changes in mood or beliefs"
    ],

    support: "Trauma-informed professional support can help. A clinician should assess the nature of the event, symptoms and duration."
  },


  // 08. Acute Stress Disorder
  {
    id: "acute-stress",
    name: "Acute stress disorder",
    group: "Trauma- and stressor-related",

    terms: [
      "recent trauma",
      "recent traumatic",
      "after the accident",
      "after the incident",
      "since the event",
      "shocked after"
    ],

    about: "Acute stress disorder describes a range of trauma-related symptoms that occur soon after a traumatic event. A professional assessment is needed to distinguish it from other responses.",

    signs: [
      "Intrusive memories",
      "Avoidance",
      "Heightened arousal",
      "Dissociation or distress"
    ],

    support: "Seek support from a qualified professional, especially if symptoms are intense or disrupt daily life."
  },


  // 09. Adjustment Disorder
  {
    id: "adjustment",
    name: "Adjustment disorder",
    group: "Trauma- and stressor-related",

    terms: [
      "can't adjust",
      "cant adjust",
      "unable to adjust",
      "life change",
      "after my breakup",
      "after losing my job",
      "major change",
      "overwhelmed by change"
    ],

    about: "Adjustment disorder involves emotional or behavioural symptoms in response to an identifiable stressor, with distress or impairment beyond what can be managed alone.",

    signs: [
      "Distress linked to a life stressor",
      "Difficulty adapting",
      "Impact on daily functioning"
    ],

    support: "A professional can help assess the stressor, timing and impact and discuss coping support."
  },


  // 10. Bipolar Disorders
  {
    id: "bipolar",
    name: "Bipolar disorders",
    group: "Mood-related",

    terms: [
      "manic",
      "mania",
      "unusually energetic",
      "need less sleep",
      "racing thoughts",
      "extremely elevated mood",
      "mood swings"
    ],

    about: "Bipolar disorders involve distinct mood episodes, which may include mania or hypomania and often depressive episodes. Everyday mood changes are not enough to identify bipolar disorder.",

    signs: [
      "Distinct periods of elevated or irritable mood",
      "Changes in energy and activity",
      "Reduced need for sleep during elevated episodes"
    ],

    support: "Assessment by a qualified mental health professional is important. Treatment plans are individualized."
  },


  // 11. Persistent Depressive Disorder
  {
    id: "persistent-depression",
    name: "Persistent depressive disorder",
    group: "Mood-related",

    terms: [
      "for years i feel sad",
      "sad for years",
      "always low mood",
      "long term sadness",
      "persistent sadness",
      "most days for years"
    ],

    about: "Persistent depressive disorder refers to a long-lasting pattern of depressive symptoms. Duration and functional impact require careful clinical assessment.",

    signs: [
      "Long-lasting low mood",
      "Low energy or self-esteem",
      "Changes in sleep or appetite"
    ],

    support: "A clinician can assess duration and symptoms and discuss psychotherapy, medication when appropriate, and ongoing support."
  },


  // 12. Eating Disorders
  {
    id: "eating-disorders",
    name: "Eating disorders",
    group: "Feeding and eating related",

    terms: [
      "fear of gaining weight",
      "binge eating",
      "restricting food",
      "obsessed with calories"
    ],

    about: "Eating disorders involve persistent disturbances in eating-related behaviour and thoughts about food, weight or body shape. They can affect physical and mental health.",

    signs: [
      "Distress around eating or body image",
      "Changes in eating-related behaviour",
      "Physical or emotional impact"
    ],

    support: "Eating-related concerns deserve compassionate professional assessment, including medical and nutritional care when needed."
  },


  // 13. Insomnia Disorder
  {
    id: "insomnia",
    name: "Insomnia disorder",
    group: "Sleep-wake related",

    terms: [
      "can't sleep",
      "cant sleep",
      "cannot sleep",
      "difficulty sleeping",
      "trouble sleeping",
      "wake up at night",
      "insomnia",
      "unable to fall asleep"
    ],

    about: "Insomnia disorder involves ongoing difficulty falling asleep, staying asleep or waking too early, despite adequate opportunity for sleep, with daytime consequences.",

    signs: [
      "Difficulty initiating or maintaining sleep",
      "Daytime tiredness or impairment",
      "Concern about sleep"
    ],

    support: "A healthcare professional can assess sleep patterns, health factors and appropriate treatment options."
  },


  // 14. ADHD
  {
    id: "adhd",
    name: "Attention-deficit/hyperactivity disorder",
    group: "Neurodevelopmental",

    terms: [
      "can't focus",
      "cant focus",
      "easily distracted",
      "forgetful",
      "disorganized",
      "impulsive",
      "restless since childhood",
      "difficulty paying attention"
    ],

    about: "ADHD is a neurodevelopmental condition involving persistent patterns of inattention and/or hyperactivity-impulsivity across settings. A short text sample cannot assess its developmental history.",

    signs: [
      "Inattention",
      "Disorganization or forgetfulness",
      "Hyperactivity or impulsivity"
    ],

    support: "A qualified clinician can assess developmental history and functioning across settings."
  },


  // 15. Burnout
  {
    id: "burnout",
    name: "Burnout / work or study-related exhaustion",
    group: "Wellbeing concern",

    terms: [
      "burned out",
      "burnt out",
      "overwhelmed with work",
      "study pressure",
      "exhausted from work",
      "academic pressure",
      "too much workload"
    ],

    about: "Burnout is commonly used to describe exhaustion and reduced capacity associated with prolonged stress, especially in work or study contexts. It is not a standalone psychiatric diagnosis in this prototype.",

    signs: [
      "Exhaustion",
      "Mental distance or cynicism",
      "Reduced sense of effectiveness"
    ],

    support: "Review workload, rest and support. If distress persists or affects functioning, consider speaking with a qualified professional."
  },


  // 16. Prolonged Grief-Related Concerns
  {
    id: "grief",
    name: "Prolonged grief-related concerns",
    group: "Other concerns for exploration",

    terms: [
      "can't move on after death",
      "cant move on after death",
      "grieving",
      "miss them every day",
      "after my loved one died",
      "loss of my loved one"
    ],

    about: "Grief is a natural response to loss. Some people experience persistent, intense grief that significantly affects daily life and may benefit from professional support.",

    signs: [
      "Persistent yearning or preoccupation with the loss",
      "Difficulty re-engaging with life",
      "Significant distress or impairment"
    ],

    support: "Grief-informed counselling or other professional support may be helpful when distress feels overwhelming or prolonged."
  },


  // 17. Substance-Use Related Concerns
  {
    id: "substance-use",
    name: "Substance-use related concerns",
    group: "Other concerns for exploration",

    terms: [
      "drinking every day",
      "can't stop drinking",
      "cant stop drinking",
      "using drugs",
      "can't stop using",
      "cant stop using",
      "craving alcohol",
      "craving drugs"
    ],

    about: "Substance-use disorders involve patterns of use that cause significant impairment or distress. A phrase match cannot determine the type or severity of a problem.",

    signs: [
      "Cravings",
      "Difficulty reducing use",
      "Continued use despite negative effects"
    ],

    support: "A healthcare professional or qualified addiction service can provide confidential assessment and support."
  },


  // 18. Somatic Symptom-Related Concerns
  {
    id: "somatic",
    name: "Somatic symptom-related concerns",
    group: "Somatic symptom related",

    terms: [
      "constantly worried about my health",
      "fear i have a disease",
      "health anxiety",
      "body symptoms worry",
      "checking my body"
    ],

    about: "Somatic symptom-related conditions involve distressing physical symptoms and/or excessive thoughts, feelings or behaviours related to health. Physical symptoms should not be dismissed.",

    signs: [
      "High health-related distress",
      "Persistent worry about symptoms",
      "Frequent checking or reassurance seeking"
    ],

    support: "Discuss physical symptoms with a healthcare professional and seek coordinated support if worry is also affecting daily life."
  },


  // 19. Agoraphobia
  {
    id: "agoraphobia",
    name: "Agoraphobia",
    group: "Anxiety-related",

    terms: [
      "afraid to leave home",
      "scared to leave home",
      "fear of crowded places",
      "fear of public transport",
      "can't go outside alone",
      "cant go outside alone"
    ],

    about: "Agoraphobia involves fear or avoidance of situations where escape or help may feel difficult if panic-like or embarrassing symptoms occur.",

    signs: [
      "Fear of certain public situations",
      "Avoidance or need for a companion",
      "Distress that limits activities"
    ],

    support: "A professional can assess the situations involved and discuss evidence-based treatment."
  },


  // 20. Body Dysmorphic Disorder
  {
    id: "body-dysmorphic",
    name: "Body dysmorphic disorder",
    group: "Obsessive-compulsive related",

    terms: [
      "obsessed with my appearance",
      "ugly appearance",
      "flaws in my face",
      "constantly checking my appearance",
      "hide my appearance"
    ],

    about: "Body dysmorphic disorder involves persistent preoccupation with perceived appearance flaws that are not observable or seem slight to others, causing distress or impairment.",

    signs: [
      "Persistent appearance preoccupation",
      "Repeated checking or comparison",
      "Avoidance or distress"
    ],

    support: "A qualified professional can assess appearance-related distress and discuss appropriate treatment."
  },


  // 21. Dissociative Disorder-Related Concerns
  {
    id: "dissociation",
    name: "Dissociative disorder-related concerns",
    group: "Dissociative related",

    terms: [
      "feel disconnected from myself",
      "watching myself from outside",
      "unreal surroundings",
      "lost time",
      "memory gaps",
      "detached from reality"
    ],

    about: "Dissociative experiences can include disruptions in memory, identity, awareness or perception. They can have multiple causes and need careful assessment.",

    signs: [
      "Feeling detached from self or surroundings",
      "Memory gaps",
      "Distress or disruption"
    ],

    support: "A qualified clinician can explore these experiences and possible contributing factors."
  },


  // 22. Personality-Related Concerns
  {
    id: "personality",
    name: "Personality-related concerns",
    group: "Personality-related",

    terms: [
      "unstable relationships",
      "fear of abandonment",
      "intense unstable emotions",
      "don't know who i am",
      "dont know who i am",
      "chronic emptiness"
    ],

    about: "Personality disorders involve enduring patterns of inner experience and behaviour that differ from cultural expectations and cause distress or impairment. A few phrases cannot establish such a pattern.",

    signs: [
      "Long-standing patterns across situations",
      "Relationship or identity difficulties",
      "Functional impact"
    ],

    support: "A careful assessment over time by a qualified professional is required."
  },


  // 23. Psychosis-Related Experiences
  {
    id: "psychosis",
    name: "Psychosis-related experiences",
    group: "Other concerns for exploration",

    terms: [
      "hearing voices",
      "seeing things others can't see",
      "seeing things others cant see",
      "people are plotting against me",
      "being watched when alone",
      "voices talking to me"
    ],

    about: "Psychosis-related experiences can affect perception, beliefs and thinking. Such experiences can have different causes, including medical or substance-related causes, and should be assessed promptly.",

    signs: [
      "Changes in perception",
      "Unusual beliefs causing distress",
      "Confused or disrupted thinking"
    ],

    support: "Seek prompt assessment from a healthcare professional, particularly if this is new, frightening or affects safety."
  },


  // 24. Safety-Related Concerns
  {
    id: "suicidal-thoughts",
    name: "Self-harm or suicide-related thoughts",
    group: "Safety concern",

    terms: [
      "need immediate help",
      "cannot stay safe",
      "feel unsafe",
      "need urgent support"
    ],

    about: "Serious emotional distress deserves immediate, compassionate attention. This educational prototype cannot assess immediate safety or replace direct professional support.",

    signs: [
      "Severe emotional distress",
      "Feeling unable to stay safe",
      "Need for immediate support"
    ],

    support: "If you feel unsafe, tell a trusted person immediately and seek urgent professional support. In India, call 112 for emergency assistance."
  },


  // 25. Stress-Related Difficulties
  {
    id: "stress",
    name: "Stress-related difficulties",
    group: "Wellbeing concern",

    terms: [
      "stressed",
      "stress",
      "under pressure",
      "overwhelmed",
      "too much pressure",
      "mentally exhausted",
      "tense",
      "irritable"
    ],

    about: "Stress is a response to demands or challenges. It can affect mood, sleep, concentration and the body, but stress alone does not identify a mental disorder.",

    signs: [
      "Feeling under pressure",
      "Irritability or tension",
      "Sleep or concentration changes"
    ],

    support: "Consider practical support, rest, manageable routines and talking with someone trusted. Seek professional help if distress persists or disrupts daily life."
  }

];


// ==========================================
// WELLBEING REFLECTION AREAS
// TOTAL: 7
// ==========================================

const REFLECTION_AREAS = [

  {
    name: "Mood and emotions",

    description:
      "Reflect on sadness, irritability, emotional changes and moments of enjoyment.",

    question:
      "How has your mood been over the past two weeks?"
  },

  {
    name: "Stress and worry",

    description:
      "Consider pressure, nervousness, repeated worry and feeling overwhelmed.",

    question:
      "What situations have been causing the most pressure?"
  },

  {
    name: "Sleep and rest",

    description:
      "Think about sleep timing, waking during the night and feeling rested.",

    question:
      "Have your sleep habits or sleep quality changed?"
  },

  {
    name: "Energy and motivation",

    description:
      "Reflect on tiredness, energy levels and starting everyday activities.",

    question:
      "Have you noticed changes in your energy or motivation?"
  },

  {
    name: "Focus and concentration",

    description:
      "Consider attention, memory and completing tasks.",

    question:
      "Has it been harder to focus on studies, work or conversations?"
  },

  {
    name: "Social connection",

    description:
      "Think about relationships, loneliness and feeling supported.",

    question:
      "Do you feel connected to people you trust?"
  },

  {
    name: "Daily functioning",

    description:
      "Reflect on effects on studies, work, responsibilities and self-care.",

    question:
      "How much are these experiences affecting your daily routine?"
  }

];