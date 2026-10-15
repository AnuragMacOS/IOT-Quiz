/**
 * Internet of Things (IoT) Quiz & Question Bank
 * Comprehensive dataset covering Weeks 0 through 12 (14 Modules, 210 Questions)
 * Authentic NPTEL Introduction to IoT assignments with verified solutions.
 */

export const QUIZ_MODULES = [
  {
    id: "week-0",
    moduleNumber: "00",
    weekLabel: "Week 0",
    title: "Prerequisites & Fundamentals",
    description: "Computer networks, TCP/IP, microcontrollers, basic electronic components and ADC basics.",
    questionCount: 15
  },
  {
    id: "week-1",
    moduleNumber: "01",
    weekLabel: "Week 1",
    title: "Introduction to IoT & Sensing",
    description: "IoT definitions, architectures, sensor classifications, actuators, and ubiquitous computing.",
    questionCount: 15
  },
  {
    id: "week-2",
    moduleNumber: "02",
    weekLabel: "Week 2",
    title: "IoT Protocols I (MQTT, CoAP, AMQP)",
    description: "MQTT wildcards & SMQTT, CoAP methods, AMQP framing, IEEE 802.15.4, ZigBee, and 6LoWPAN.",
    questionCount: 15
  },
  {
    id: "week-3",
    moduleNumber: "03",
    weekLabel: "Week 3",
    title: "IoT Protocols II (HART, Z-Wave, NFC)",
    description: "Wired HART, Z-Wave frequencies & healing, NFC magnetic induction, and Bluetooth piconets.",
    questionCount: 15
  },
  {
    id: "week-4",
    moduleNumber: "04",
    weekLabel: "Week 4",
    title: "Sensor Networks, UAV & M2M",
    description: "Ultrasonic sensors, sensing coverage, data mules, UAV network topologies, and M2M vs SCADA.",
    questionCount: 15
  },
  {
    id: "week-5",
    moduleNumber: "05",
    weekLabel: "Week 5",
    title: "Interoperability & Arduino Programming",
    description: "Syntactic interoperability, UMB, Arduino UNO specs, C/C++ sketches, DHT sensors, and actuators.",
    questionCount: 15
  },
  {
    id: "week-6",
    moduleNumber: "06",
    weekLabel: "Week 6",
    title: "Python & Raspberry Pi",
    description: "Python data structures & sockets, Raspberry Pi 3 hardware, Raspbian OS, CSI camera, and GPIO.",
    questionCount: 15
  },
  {
    id: "week-7-1",
    moduleNumber: "07",
    weekLabel: "Week 7 (Part 1)",
    title: "IoT Cloud & Virtualization",
    description: "Sensor virtualization, multi-tenant cloud models, hypervisors, and Sensing-as-a-Service (SEaaS).",
    questionCount: 15
  },
  {
    id: "week-7-2",
    moduleNumber: "08",
    weekLabel: "Week 7 (Part 2)",
    title: "Edge & Fog Computing Basics",
    description: "Edge offloading, distributed caching, latency minimization, and edge analytics architectures.",
    questionCount: 15
  },
  {
    id: "week-8",
    moduleNumber: "09",
    weekLabel: "Week 8",
    title: "SDN in IoT & Cloud Infrastructure",
    description: "ODIN, Mobi-Flow rule placement, Mininet-WiFi, NIST cloud characteristics, IaaS/PaaS, and CloudSim.",
    questionCount: 15
  },
  {
    id: "week-9",
    moduleNumber: "10",
    weekLabel: "Week 9",
    title: "OpenStack, Sensor-Cloud & Fog",
    description: "Nova, Horizon, DevStack, Sensor-Cloud caching (IC), and Fog computing layers.",
    questionCount: 15
  },
  {
    id: "week-10",
    moduleNumber: "11",
    weekLabel: "Week 10",
    title: "Smart Cities, HAN & V2X",
    description: "Smart city dimensions, data fusion levels, HAN (ZigBee, X-10), dedicated energy harvesting, and ICVs.",
    questionCount: 15
  },
  {
    id: "week-11",
    moduleNumber: "12",
    weekLabel: "Week 11",
    title: "Smart Grid & Industrial IoT (IIoT)",
    description: "Bidirectional grids, Time-of-Use pricing, PMUs, wrap-and-reuse in IIoT, veracity, and Hadoop HDFS.",
    questionCount: 15
  },
  {
    id: "week-12",
    moduleNumber: "13",
    weekLabel: "Week 12",
    title: "Data Analytics, AgriSens & Healthcare",
    description: "Qualitative analysis, ANOVA, AgriSens 3-layer architecture, and smartphone activity monitoring.",
    questionCount: 15
  }
];

export const QUIZ_QUESTIONS = [
  // ==========================================
  // WEEK 0: ASSIGNMENT 0
  // ==========================================
  {
    id: "w0-q1",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 1,
    questionText: "Which of the following best describes a computer network?",
    options: [
      { key: "a", text: "A collection of independent computers that cannot communicate" },
      { key: "b", text: "A group of interconnected devices that can exchange data" },
      { key: "c", text: "A single computer running multiple programs" },
      { key: "d", text: "A storage device connected only to a monitor" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A computer network is defined as a group of interconnected devices (such as computers, servers, and IoT nodes) that are linked together to share resources and exchange data."
  },
  {
    id: "w0-q2",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 2,
    questionText: "Which of the following are examples of network communication media?",
    options: [
      { key: "a", text: "Twisted pair cable" },
      { key: "b", text: "Optical fiber" },
      { key: "c", text: "Wireless radio communication" },
      { key: "d", text: "CPU register" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Twisted pair cables, optical fibers, and wireless radio waves are physical or wireless media used to transmit data across a network. A CPU register is an internal processor component, not a network medium."
  },
  {
    id: "w0-q3",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 3,
    questionText: "State whether the following statement is True or False. Statement: A protocol is a set of rules that defines how data is exchanged between communicating devices.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "A protocol is a standardized set of rules and conventions that dictate how devices format, transmit, and receive data over a network."
  },
  {
    id: "w0-q4",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 4,
    questionText: "Which layer of the TCP/IP model is mainly responsible for logical addressing and routing of packets?",
    options: [
      { key: "a", text: "Application layer" },
      { key: "b", text: "Transport layer" },
      { key: "c", text: "Network layer" },
      { key: "d", text: "Physical layer" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The Network layer (or Internet layer in TCP/IP) is responsible for logical IP addressing and routing packets from the source to the destination across multiple networks."
  },
  {
    id: "w0-q5",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 5,
    questionText: "Which of the following correctly distinguishes TCP and UDP?",
    options: [
      { key: "a", text: "TCP is connection-oriented, while UDP is connectionless" },
      { key: "b", text: "UDP guarantees reliable delivery, while TCP does not" },
      { key: "c", text: "TCP provides reliability using acknowledgements and retransmissions" },
      { key: "d", text: "UDP generally has lower overhead than TCP" }
    ],
    correctKeys: ["a", "c", "d"],
    type: "msq",
    solution: "TCP is a connection-oriented, reliable protocol that uses acknowledgements, while UDP is connectionless, does not guarantee delivery, and has lower overhead due to the lack of error-checking mechanisms."
  },
  {
    id: "w0-q6",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 6,
    questionText: "An IP address is primarily used to:",
    options: [
      { key: "a", text: "Identify a device/interface on a network" },
      { key: "b", text: "Store application data permanently" },
      { key: "c", text: "Convert analog signals into digital signals" },
      { key: "d", text: "Supply electrical power to sensors" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "An IP (Internet Protocol) address acts as a unique logical identifier for a device or network interface, allowing it to send and receive data over the internet or a local network."
  },
  {
    id: "w0-q7",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 7,
    questionText: "State whether the following statement is True or False. Statement: A router is used to forward packets between different networks.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "A router is a networking device that connects multiple distinct computer networks and forwards data packets between them based on their destination IP addresses."
  },
  {
    id: "w0-q8",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 8,
    questionText: "Which of the following are basic components of an embedded system?",
    options: [
      { key: "a", text: "Microcontroller or microprocessor" },
      { key: "b", text: "Memory" },
      { key: "c", text: "Input/output interfaces" },
      { key: "d", text: "Printer cartridge only" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "An embedded system typically consists of a processing unit (microcontroller/microprocessor), memory to store code and data, and I/O interfaces to interact with sensors and actuators."
  },
  {
    id: "w0-q9",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 9,
    questionText: "A microcontroller usually contains:",
    options: [
      { key: "a", text: "CPU" },
      { key: "b", text: "Memory" },
      { key: "c", text: "Input/output ports" },
      { key: "d", text: "Only a display screen" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Unlike a general-purpose microprocessor, a microcontroller integrates a CPU, memory (RAM and ROM), and input/output ports on a single integrated circuit chip."
  },
  {
    id: "w0-q10",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 10,
    questionText: "State whether the following statement is True or False. Statement: Sensors are used to collect information from the physical environment.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Sensors are devices that detect and measure physical properties from the environment (like temperature, light, or pressure) and convert them into readable electrical signals."
  },
  {
    id: "w0-q11",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 11,
    questionText: "Which of the following is an example of an actuator?",
    options: [
      { key: "a", text: "Motor" },
      { key: "b", text: "Relay" },
      { key: "c", text: "Valve" },
      { key: "d", text: "Temperature reading" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Actuators are components that convert electrical signals into physical action. Motors, relays, and electrically controlled valves are all examples of actuators."
  },
  {
    id: "w0-q12",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 12,
    questionText: "An Analog-to-Digital Converter (ADC) is used to:",
    options: [
      { key: "a", text: "Convert analog signals into digital values" },
      { key: "b", text: "Convert IP addresses into MAC addresses" },
      { key: "c", text: "Store data permanently in cloud storage" },
      { key: "d", text: "Generate wireless signals without input" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "An ADC takes continuous physical analog signals (from sensors) and converts them into discrete digital numbers that a microcontroller or processor can understand."
  },
  {
    id: "w0-q13",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 13,
    questionText: "State True or False. Statement: Cloud computing can provide storage and processing resources for IoT data.",
    options: [
      { key: "a", text: "False" },
      { key: "b", text: "True" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Cloud computing offers scalable, remote servers that are widely used in IoT ecosystems for storing large volumes of sensor data and performing heavy computational processing."
  },
  {
    id: "w0-q14",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 14,
    questionText: "Which of the following are common challenges in IoT and networked systems?",
    options: [
      { key: "a", text: "Security" },
      { key: "b", text: "Privacy" },
      { key: "c", text: "Scalability" },
      { key: "d", text: "No requirement of communication" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "IoT systems face significant challenges regarding data security (preventing hacks), user privacy (protecting sensitive data), and network scalability (managing millions of connected devices)."
  },
  {
    id: "w0-q15",
    moduleId: "week-0",
    weekLabel: "Week 0",
    questionNumber: 15,
    questionText: "In binary number representation, the decimal number 5 is written as:",
    options: [
      { key: "a", text: "101" },
      { key: "b", text: "110" },
      { key: "c", text: "111" },
      { key: "d", text: "100" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "In binary, 101 calculates to (1 * 2^2) + (0 * 2^1) + (1 * 2^0), which equals 4 + 0 + 1 = 5 in decimal."
  },

  // ==========================================
  // WEEK 1: ASSIGNMENT 1
  // ==========================================
  {
    id: "w1-q1",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 1,
    questionText: "Who coined the term 'Internet of Things' in 1999 during a presentation for Procter & Gamble?",
    options: [
      { key: "a", text: "Tim Berners-Lee" },
      { key: "b", text: "Kevin Ashton" },
      { key: "c", text: "Vint Cerf" },
      { key: "d", text: "Alan Turing" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Kevin Ashton coined the term 'Internet of Things' in 1999 while working at the Auto-ID Center at MIT to link RFID in P&G's supply chain to the internet."
  },
  {
    id: "w1-q2",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 2,
    questionText: "Which of the following are primary characteristics of the Internet of Things?",
    options: [
      { key: "a", text: "Enormous scale and interconnectivity" },
      { key: "b", text: "Heterogeneity of devices" },
      { key: "c", text: "Dynamic changes in device state" },
      { key: "d", text: "Exclusively wired communication" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "IoT is characterized by massive scale, pervasive interconnectivity, device heterogeneity, and dynamic changes. Devices use diverse wireless and wired channels."
  },
  {
    id: "w1-q3",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 3,
    questionText: "State True or False. In sensor terminology, sensitivity is defined as the ratio of change in output electrical signal to the change in input physical parameter.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Sensitivity describes how much the output changes when the measured input physical quantity changes by a unit amount (ΔOutput / ΔInput)."
  },
  {
    id: "w1-q4",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 4,
    questionText: "In the standard 3-layer architecture of IoT, which layer directly interacts with physical sensors and actuators?",
    options: [
      { key: "a", text: "Perception layer" },
      { key: "b", text: "Network layer" },
      { key: "c", text: "Application layer" },
      { key: "d", text: "Business layer" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The Perception layer (physical layer) is responsible for sensing physical parameters and interacting with the real world using sensors and actuators."
  },
  {
    id: "w1-q5",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 5,
    questionText: "State True or False. Passive sensors generate an output signal directly from the input physical stimulation without requiring an external electrical power supply.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Passive sensors (e.g., thermocouples, piezoelectric crystals) generate their own electrical output signal without an external power source."
  },
  {
    id: "w1-q6",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 6,
    questionText: "Which IPv6 address length allows an astronomical address space to accommodate billions of IoT devices?",
    options: [
      { key: "a", text: "32 bits" },
      { key: "b", text: "64 bits" },
      { key: "c", text: "128 bits" },
      { key: "d", text: "256 bits" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "IPv6 uses 128-bit addresses (2^128 addresses), solving IPv4's 32-bit address exhaustion and providing unique IPs for every IoT device."
  },
  {
    id: "w1-q7",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 7,
    questionText: "Which of the following is NOT an actuator?",
    options: [
      { key: "a", text: "DC motor" },
      { key: "b", text: "Solenoid valve" },
      { key: "c", text: "Light Dependent Resistor (LDR)" },
      { key: "d", text: "Relay switch" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "An LDR is a light sensor whose resistance varies with illumination. Motors, solenoid valves, and relays are actuators that produce physical actions."
  },
  {
    id: "w1-q8",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 8,
    questionText: "Which fundamental technology originally catalyzed the Auto-ID Center's vision of IoT?",
    options: [
      { key: "a", text: "Radio Frequency Identification (RFID)" },
      { key: "b", text: "Quantum computing" },
      { key: "c", text: "Satellite radio" },
      { key: "d", text: "Fiber distributed data interface" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "RFID tags and Electronic Product Code (EPC) were the foundational technologies that catalyzed the modern IoT paradigm."
  },
  {
    id: "w1-q9",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 9,
    questionText: "State True or False. Ubiquitous or pervasive computing represents an environment where computing capabilities are invisibly integrated into everyday objects.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Ubiquitous computing, pioneered by Mark Weiser, describes computational intelligence woven into the fabric of everyday environments."
  },
  {
    id: "w1-q10",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 10,
    questionText: "How does M2M primarily differ from the broader concept of IoT?",
    options: [
      { key: "a", text: "M2M typically uses point-to-point connections with proprietary protocols, while IoT leverages open IP networks" },
      { key: "b", text: "IoT requires humans to manually pass packets between machines" },
      { key: "c", text: "M2M uses cloud computing, whereas IoT cannot connect to the internet" },
      { key: "d", text: "There is no difference between M2M and IoT" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "M2M historically uses isolated, point-to-point links and closed proprietary protocols. IoT embraces open IP standards, cloud services, and horizontal cross-system data sharing."
  },
  {
    id: "w1-q11",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 11,
    questionText: "Thermocouples operate on which thermoelectric principle to measure temperature differences?",
    options: [
      { key: "a", text: "Seebeck effect" },
      { key: "b", text: "Doppler effect" },
      { key: "c", text: "Hall effect" },
      { key: "d", text: "Faraday's law" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The Seebeck effect produces an electromotive force (voltage) across junctions of dissimilar electrical conductors when subjected to a temperature gradient."
  },
  {
    id: "w1-q12",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 12,
    questionText: "The resolution of a sensor is defined as:",
    options: [
      { key: "a", text: "The smallest detectable change in the input physical quantity" },
      { key: "b", text: "The maximum operating voltage of the sensor" },
      { key: "c", text: "The speed at which packets travel over Ethernet" },
      { key: "d", text: "The physical weight of the transducer" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Resolution denotes the smallest incremental change in the measurand that results in a detectable change in the sensor's output."
  },
  {
    id: "w1-q13",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 13,
    questionText: "State True or False. Active sensors require an external power excitation source to perform sensing measurements.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Active sensors require an external power supply or excitation signal (e.g., strain gauges, thermistors, RTDs) to measure physical changes."
  },
  {
    id: "w1-q14",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 14,
    questionText: "Which of the following are examples of environmental sensors used in IoT?",
    options: [
      { key: "a", text: "Barometric pressure sensor" },
      { key: "b", text: "Relative humidity sensor" },
      { key: "c", text: "Gas/CO2 concentration sensor" },
      { key: "d", text: "Pneumatic piston" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Barometric pressure, humidity, and gas sensors measure environmental parameters. Pneumatic pistons are mechanical actuators."
  },
  {
    id: "w1-q15",
    moduleId: "week-1",
    weekLabel: "Week 1",
    questionNumber: 15,
    questionText: "In IoT sensing systems, an analog sensor requires which component before its readings can be processed by a digital microcontroller?",
    options: [
      { key: "a", text: "Analog-to-Digital Converter (ADC)" },
      { key: "b", text: "Step-up transformer" },
      { key: "c", text: "Mechanical flywheel" },
      { key: "d", text: "DNS router" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "An ADC samples continuous analog electrical voltages and converts them into discrete binary numbers for digital processing."
  },

  // ==========================================
  // WEEK 2: ASSIGNMENT 2 (Provided by user)
  // ==========================================
  {
    id: "w2-q1",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 1,
    questionText: "In MQTT, which field of a published message is used by the broker as routing information?",
    options: [
      { key: "a", text: "Topic" },
      { key: "b", text: "Client identifier" },
      { key: "c", text: "Payload length" },
      { key: "d", text: "Session timer" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The MQTT broker dispatches messages between senders and receivers. The topic included in a published message provides the routing information that the broker uses to deliver the message to clients subscribed to the matching topic."
  },
  {
    id: "w2-q2",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 2,
    questionText: "Which of the following statements about MQTT topic wildcards are correct?",
    options: [
      { key: "a", text: "The plus sign (+) matches an arbitrary value at exactly one hierarchy level." },
      { key: "b", text: "The hash sign (#) can be used to subscribe to all underlying hierarchy levels." },
      { key: "c", text: "The subscription house/# matches only the exact topic house." },
      { key: "d", text: "The subscription house/+/temperature can match house/kitchen/temperature." }
    ],
    correctKeys: ["a", "b", "d"],
    type: "msq",
    solution: "The plus sign (+) is a single-level wildcard, whereas the hash sign (#) is a multilevel wildcard. Thus, house/+/temperature can match house/kitchen/temperature, and house/# matches all topics whose hierarchy begins with house, not only the exact topic house."
  },
  {
    id: "w2-q3",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 3,
    questionText: "Which of the following are main stages of Secure MQTT (SMQTT)?",
    options: [
      { key: "a", text: "Setup" },
      { key: "b", text: "Publish" },
      { key: "c", text: "Decryption" },
      { key: "d", text: "Route discovery" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "SMQTT consists of four main stages: setup, encryption, publish, and decryption. Route discovery is not one of the SMQTT stages."
  },
  {
    id: "w2-q4",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 4,
    questionText: "At the transport layer, CoAP (Constrained Application Protocol) operates over which protocol?",
    options: [
      { key: "a", text: "TCP" },
      { key: "b", text: "UDP" },
      { key: "c", text: "SCTP" },
      { key: "d", text: "FTP" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "CoAP is designed for constrained environments and operates over UDP at the transport layer. Its lightweight design helps reduce communication overhead for resource-constrained IoT devices."
  },
  {
    id: "w2-q5",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 5,
    questionText: "State True or False. In CoAP, a piggyback response is carried with the acknowledgment, whereas in the separate mode, the server response is sent in a message separate from the acknowledgment.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "In the piggyback mode, the server places its response in the acknowledgment message. In the separate mode, the acknowledgment is sent first and the response is transmitted later as a separate message."
  },
  {
    id: "w2-q6",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 6,
    questionText: "Which of the following CoAP request-method mappings are correct?",
    options: [
      { key: "a", text: "GET retrieve data" },
      { key: "b", text: "PUT create data" },
      { key: "c", text: "PUSH update data" },
      { key: "d", text: "DELETE delete data" }
    ],
    correctKeys: ["a", "b", "c", "d"],
    type: "msq",
    solution: "As presented in the lecture, CoAP uses GET, PUT, PUSH, and DELETE requests to retrieve, create, update, and delete data, respectively."
  },
  {
    id: "w2-q7",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 7,
    questionText: "Which AMQP frame type is used to control the message-flow rate?",
    options: [
      { key: "a", text: "Transfer" },
      { key: "b", text: "Detach" },
      { key: "c", text: "Disposition" },
      { key: "d", text: "Flow" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "The Flow frame controls the rate of message flow between AMQP peers. By comparison, Transfer carries messages, Disposition communicates a change in transfer state, and Detach terminates a link."
  },
  {
    id: "w2-q8",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 8,
    questionText: "Which of the following statements about AMQP components are correct?",
    options: [
      { key: "a", text: "An exchange receives messages and routes them to queues." },
      { key: "b", text: "A queue stores messages for business processes or consumers." },
      { key: "c", text: "A binding specifies message-distribution rules between an exchange and queues." },
      { key: "d", text: "A consumer must route every producer message before it reaches an exchange." }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "The main AMQP components discussed in the lecture are exchanges, queues, and bindings. An exchange receives and routes messages, a queue stores messages for consumers or business processes, and a binding defines the distribution rules connecting exchanges to queues."
  },
  {
    id: "w2-q9",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 9,
    questionText: "Which of the following IEEE 802.15.4 variant-application pairs are correct?",
    options: [
      { key: "a", text: "IEEE 802.15.4c China" },
      { key: "b", text: "IEEE 802.15.4e Industrial applications" },
      { key: "c", text: "IEEE 802.15.4f Active RFID" },
      { key: "d", text: "IEEE 802.15.4g Smart utility networks" }
    ],
    correctKeys: ["a", "b", "c", "d"],
    type: "msq",
    solution: "The lecture associates IEEE 802.15.4c with China, 802.15.4d with Japan, 802.15.4e with industrial applications, 802.15.4f with active RFID, and 802.15.4g with smart utility networks."
  },
  {
    id: "w2-q10",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 10,
    questionText: "In a non-beacon-enabled IEEE 802.15.4 network, data frames are transmitted using:",
    options: [
      { key: "a", text: "Slotted CSMA/CA" },
      { key: "b", text: "Unslotted CSMA/CA" },
      { key: "c", text: "Token passing" },
      { key: "d", text: "Pure TDMA only" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Non-beacon-enabled IEEE 802.15.4 networks transmit data frames using unslotted CSMA/CA. In contrast, beacon-enabled networks use slotted CSMA/CA with a superframe structure managed by the PAN coordinator."
  },
  {
    id: "w2-q11",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 11,
    questionText: "Which statement correctly describes the relationship between IEEE 802.15.4 and ZigBee?",
    options: [
      { key: "a", text: "IEEE 802.15.4 provides layers 1 and 2, while ZigBee extends the functionality to layer 3 and above." },
      { key: "b", text: "ZigBee provides only the physical layer, while IEEE 802.15.4 provides all higher layers." },
      { key: "c", text: "Both standards operate only at the application layer." },
      { key: "d", text: "ZigBee and IEEE 802.15.4 are identical standards with no functional distinction." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "IEEE 802.15.4 primarily specifies the physical and MAC layers. ZigBee operates on top of these layers and adds higher-layer functions, including authentication, encryption, routing, forwarding, and support for mesh networking."
  },
  {
    id: "w2-q12",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 12,
    questionText: "Which of the following statements characterizes a ZigBee end device?",
    options: [
      { key: "a", text: "It communicates with its parent node." },
      { key: "b", text: "It cannot relay data for other devices." },
      { key: "c", text: "It is a reduced-functionality device." },
      { key: "d", text: "It forms the network root and acts as the trust center." }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "A ZigBee end device has sufficient functionality to communicate with its parent, but it cannot relay data for other devices. It is therefore a reduced-functionality device. The coordinator, not an end device, forms the network root and may act as the trust center."
  },
  {
    id: "w2-q13",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 13,
    questionText: "Which option correctly describes addressing in 6LoWPAN?",
    options: [
      { key: "a", text: "A 16-bit address is globally unique, while a 64-bit address is PAN-specific." },
      { key: "b", text: "A 16-bit short address is PAN-specific and assigned by the PAN coordinator, while a 64-bit extended address is globally unique." },
      { key: "c", text: "Both 16-bit and 64-bit addresses are globally unique and assigned by an Internet router." },
      { key: "d", text: "Both address types are used only for multicast communication." }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "6LoWPAN supports 16-bit short addresses for PAN-specific communication; these are assigned by the PAN coordinator. It also supports 64-bit extended addresses, which are globally unique."
  },
  {
    id: "w2-q14",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 14,
    questionText: "State True or False. In LOADng routing, an intermediate router may respond to a Route Request (RREQ) whenever it already has an active route to the requested destination.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "In LOADng, only the destination is permitted to respond to an RREQ. Intermediate LOADng routers are explicitly prohibited from responding, even when they have an active route to the requested destination."
  },
  {
    id: "w2-q15",
    moduleId: "week-2",
    weekLabel: "Week 2",
    questionNumber: 15,
    questionText: "How does a passive RFID tag obtain the power required to transmit information?",
    options: [
      { key: "a", text: "It uses its own internal battery." },
      { key: "b", text: "It is powered inductively by an RFID reader." },
      { key: "c", text: "It receives power through a wired AIDC connection." },
      { key: "d", text: "It does not require any source of power." }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Passive RFID tags do not have their own power supply. They must first be powered inductively by an RFID reader before they can transmit information. Active RFID tags, in contrast, have their own power supply."
  },

  // ==========================================
  // WEEK 3: ASSIGNMENT 3 (Provided by user)
  // ==========================================
  {
    id: "w3-q1",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 1,
    questionText: "State whether the following statement is true or false. Statement: There is no network layer in Wired HART.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "There is no network layer in Wired HART."
  },
  {
    id: "w3-q2",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 2,
    questionText: "Z-Wave operates at ___ MHz in the US and ___ MHz in Europe.",
    options: [
      { key: "a", text: "1008, 989" },
      { key: "b", text: "908.42, 868.42" },
      { key: "c", text: "767.56, 855.28" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Z-Wave operates at 908.42 MHz in the US and 868.42 MHz in Europe."
  },
  {
    id: "w3-q3",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 3,
    questionText: "Dumb behavior of sensor nodes is ___ in nature (as it is dependent on the effects of the environmental conditions).",
    options: [
      { key: "a", text: "Temporal" },
      { key: "b", text: "Spatial" },
      { key: "c", text: "Both (a) and (b)" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Dumb behavior of sensor nodes is Temporal in nature (as it is dependent on the effects of the environmental conditions)."
  },
  {
    id: "w3-q4",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 4,
    questionText: "The process of identifying channels consistently affected by interference and removing them from use is known as:",
    options: [
      { key: "a", text: "Channel Trimming" },
      { key: "b", text: "Channel Flushing" },
      { key: "c", text: "Both (a) and (b)" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Channel Blacklisting identifies channels consistently affected by interference and removes them from use."
  },
  {
    id: "w3-q5",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 5,
    questionText: "The full form of NFC is:",
    options: [
      { key: "a", text: "Near Field Contact" },
      { key: "b", text: "Near Field Communication" },
      { key: "c", text: "Both (a) and (b)" },
      { key: "d", text: "Neither (a) nor (b)" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The full form of NFC is Near Field Communication."
  },
  {
    id: "w3-q6",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 6,
    questionText: "State true or false. NFC works on the principle of magnetic induction.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "NFC works on the principle of magnetic induction."
  },
  {
    id: "w3-q7",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 7,
    questionText: "State whether the following statement is true or false. Statement: NFC tags found in supermarket products are examples of active NFC.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Passive NFC tags found in supermarket products are examples of passive NFC."
  },
  {
    id: "w3-q8",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 8,
    questionText: "Bluetooth is based on:",
    options: [
      { key: "a", text: "Nanonets" },
      { key: "b", text: "Binarynets" },
      { key: "c", text: "Both (a) and (b)" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Bluetooth is based on Piconets."
  },
  {
    id: "w3-q9",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 9,
    questionText: "A ___ in NFC emits a small electric current which creates a magnetic field that in turn bridges the physical space between the devices.",
    options: [
      { key: "a", text: "reader" },
      { key: "b", text: "writer" },
      { key: "c", text: "destroyer" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "A reader in NFC emits a small electric current which creates a magnetic field that in turn bridges the physical space between the devices."
  },
  {
    id: "w3-q10",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 10,
    questionText: "State true or false. Bluetooth technology is based on Ad-hoc network technology.",
    options: [
      { key: "a", text: "False" },
      { key: "b", text: "True" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Bluetooth technology is based on Ad-hoc network technology."
  },
  {
    id: "w3-q11",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 11,
    questionText: "State true or false. Z-Wave utilizes GFSK modulation and Hongkong channel encoding.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Z-Wave utilizes GFSK modulation and Manchester channel encoding."
  },
  {
    id: "w3-q12",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 12,
    questionText: "The process of bypassing radio dead-spots is done using a message called ___ in Z-Wave.",
    options: [
      { key: "a", text: "Ping" },
      { key: "b", text: "Healing" },
      { key: "c", text: "Frame" },
      { key: "d", text: "None of these" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The process of bypassing radio dead-spots is done using a message called Healing in Z-Wave."
  },
  {
    id: "w3-q13",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 13,
    questionText: "State whether the following statement is true or false. Statement: Sensor nodes have unlimited battery life.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Sensor nodes have limited battery life."
  },
  {
    id: "w3-q14",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 14,
    questionText: "State whether the following statement is true or false. Statement: The Link Manager Protocol in Bluetooth manages the establishment, authentication, and link configuration.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "The Link Manager Protocol in Bluetooth manages the establishment, authentication, link configuration."
  },
  {
    id: "w3-q15",
    moduleId: "week-3",
    weekLabel: "Week 3",
    questionNumber: 15,
    questionText: "Zigbee commonly uses ___ data rate.",
    options: [
      { key: "a", text: "250 kbps" },
      { key: "b", text: "250 Mbps" },
      { key: "c", text: "260 kbps" },
      { key: "d", text: "260 Mbps" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Zigbee commonly uses 250 kbps data rate."
  },

  // ==========================================
  // WEEK 4: ASSIGNMENT 4 (Provided by user)
  // ==========================================
  {
    id: "w4-q1",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 1,
    questionText: "What does the ultrasonic sensor measure generally in the AID system?",
    options: [
      { key: "a", text: "Humidity" },
      { key: "b", text: "Distance of the object" },
      { key: "c", text: "Soil pH" },
      { key: "d", text: "Light intensity" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "In the Agricultural Intrusion Detection (AID) system, the ultrasonic sensor measures the distance at which the detected object is located."
  },
  {
    id: "w4-q2",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 2,
    questionText: "Which component processes the data received from the sensors in the AID system?",
    options: [
      { key: "a", text: "Camera" },
      { key: "b", text: "NFC tag" },
      { key: "c", text: "Microcontroller" },
      { key: "d", text: "Ultrasonic sensor" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The microcontroller processes the data received from the sensors in the AID system."
  },
  {
    id: "w4-q3",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 3,
    questionText: "How can standard nanodevices communicate?",
    options: [
      { key: "a", text: "Electromagnetic communication" },
      { key: "b", text: "Molecular communication" },
      { key: "c", text: "Wired Ethernet" },
      { key: "d", text: "ZigBee communication" }
    ],
    correctKeys: ["a", "b"],
    type: "msq",
    solution: "The lecture discusses electromagnetic and molecular communication for nanodevices."
  },
  {
    id: "w4-q4",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 4,
    questionText: "When does sensing coverage guarantee network connectivity in a WSN?",
    options: [
      { key: "a", text: "When the transmission range is at least twice the sensing range" },
      { key: "b", text: "When the sensing range is at least twice the transmission range" },
      { key: "c", text: "When the transmission and sensing ranges are equal" },
      { key: "d", text: "When the transmission range is smaller than the sensing range" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Sensing coverage guarantees connectivity when the transmission range is at least twice the sensing range."
  },
  {
    id: "w4-q5",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 5,
    questionText: "Which of the following is a coverage problem in a static WSN?",
    options: [
      { key: "a", text: "Area coverage" },
      { key: "b", text: "Data compression" },
      { key: "c", text: "Route encryption" },
      { key: "d", text: "Clock synchronization" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Area coverage is a standard coverage problem in a static wireless sensor network. The other options are networking tasks, not coverage categories."
  },
  {
    id: "w4-q6",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 6,
    questionText: "Which reporting method is used for forest-fire monitoring in a WSN?",
    options: [
      { key: "a", text: "Event-driven reporting" },
      { key: "b", text: "On-demand reporting" },
      { key: "c", text: "Manual reporting" },
      { key: "d", text: "Location-based reporting" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Forest-fire monitoring uses event-driven reporting because sensor nodes report data when a fire-related event is detected. The lecture contrasts this with on-demand reporting, such as an inventory-control system."
  },
  {
    id: "w4-q7",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 7,
    questionText: "What does a data mule do?",
    options: [
      { key: "a", text: "Replaces all sensor nodes" },
      { key: "b", text: "Measures only temperature" },
      { key: "c", text: "Collects data and carries it to the sink" },
      { key: "d", text: "Repairs damaged hardware" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "A data mule visits sensor nodes, collects their data, and delivers it to the sink."
  },
  {
    id: "w4-q8",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 8,
    questionText: "What may happen if a critical stationary sensor node fails?",
    options: [
      { key: "a", text: "The network may be partitioned" },
      { key: "b", text: "All nodes become mobile" },
      { key: "c", text: "The sensing range doubles" },
      { key: "d", text: "The network repairs itself by movement" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Failure of a critical stationary node may divide the network into disconnected parts."
  },
  {
    id: "w4-q9",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 9,
    questionText: "A person who provides sensing information acts as a:",
    options: [
      { key: "a", text: "Router" },
      { key: "b", text: "Radio channel" },
      { key: "c", text: "Actuator" },
      { key: "d", text: "Data source" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "In human-centric sensing, a person may act as a data source by providing or collecting information."
  },
  {
    id: "w4-q10",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 10,
    questionText: "Which is an advantage of a stationary wireless sensor network?",
    options: [
      { key: "a", text: "Easy topology maintenance" },
      { key: "b", text: "Automatic movement after node failure" },
      { key: "c", text: "Continuously changing topology" },
      { key: "d", text: "Unpredictable sensor locations" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "In a stationary wireless sensor network, sensor nodes remain fixed. Therefore, deployment and topology maintenance are comparatively easier."
  },
  {
    id: "w4-q11",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 11,
    questionText: "State whether the following statement is True or False. Statement: In a UAV network, the network topology may change frequently because the UAVs are mobile.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "UAVs move from one location to another, causing frequent changes in their relative positions and communication links. Therefore, the network topology may change frequently."
  },
  {
    id: "w4-q12",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 12,
    questionText: "Which is a common issue in UAV networks?",
    options: [
      { key: "a", text: "Frequent topology changes" },
      { key: "b", text: "Fixed relative positions" },
      { key: "c", text: "Permanent communication links" },
      { key: "d", text: "No possibility of UAV failure" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "UAV movement causes frequent changes in network topology and communication links."
  },
  {
    id: "w4-q13",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 13,
    questionText: "Compared with traditional SCADA, M2M supports:",
    options: [
      { key: "a", text: "Only isolated systems" },
      { key: "b", text: "No device communication" },
      { key: "c", text: "Continuous human control" },
      { key: "d", text: "Cross-platform integration" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Traditional SCADA commonly uses isolated proprietary systems, while M2M supports cross-platform integration."
  },
  {
    id: "w4-q14",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 14,
    questionText: "State whether the following statement is True or False. Statement: In a stationary wireless sensor network, sensor nodes can automatically move to restore connectivity after a node failure.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "In a stationary wireless sensor network, sensor nodes remain fixed. Therefore, they cannot move automatically to repair connectivity after a node failure."
  },
  {
    id: "w4-q15",
    moduleId: "week-4",
    weekLabel: "Week 4",
    questionNumber: 15,
    questionText: "Which statement best describes M2M communication?",
    options: [
      { key: "a", text: "Devices can exchange data without direct human control" },
      { key: "b", text: "Every data exchange must be performed manually" },
      { key: "c", text: "Only one device can communicate at a time" },
      { key: "d", text: "Devices cannot communicate through a network" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "M2M communication allows machines or devices to exchange data automatically. Human intervention may still be required for maintenance and operational stability."
  },

  // ==========================================
  // WEEK 5: ASSIGNMENT 5 (Provided by user)
  // ==========================================
  {
    id: "w5-q1",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 1,
    questionText: "What does interoperability allow IoT devices to do?",
    options: [
      { key: "a", text: "Communicate and exchange data" },
      { key: "b", text: "Work only offline" },
      { key: "c", text: "Use only one protocol" },
      { key: "d", text: "Disable other devices" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Interoperability enables different IoT devices and systems to communicate and exchange data."
  },
  {
    id: "w5-q2",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 2,
    questionText: "Syntactic interoperability deals with:",
    options: [
      { key: "a", text: "Message format" },
      { key: "b", text: "Battery size" },
      { key: "c", text: "Device colour" },
      { key: "d", text: "Sensor weight" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Syntactic interoperability concerns the format of messages exchanged between devices and users."
  },
  {
    id: "w5-q3",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 3,
    questionText: "What does UMB stand for?",
    options: [
      { key: "a", text: "Universal Middleware Bridge" },
      { key: "b", text: "Unified Mobile Board" },
      { key: "c", text: "Universal Memory Block" },
      { key: "d", text: "User Management Bridge" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "UMB stands for Universal Middleware Bridge. It helps different middleware-based devices work together."
  },
  {
    id: "w5-q4",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 4,
    questionText: "What is the operating voltage of the Arduino UNO?",
    options: [
      { key: "a", text: "3.3 V" },
      { key: "b", text: "5 V" },
      { key: "c", text: "9 V" },
      { key: "d", text: "12 V" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The Arduino UNO operates at 5 volts."
  },
  {
    id: "w5-q5",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 5,
    questionText: "What is a program written in the Arduino IDE called?",
    options: [
      { key: "a", text: "Packet" },
      { key: "b", text: "Sketch" },
      { key: "c", text: "Frame" },
      { key: "d", text: "Query" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A program created and uploaded using the Arduino IDE is called a sketch."
  },
  {
    id: "w5-q6",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 6,
    questionText: "Which interface is mainly used to connect an Arduino UNO to a computer?",
    options: [
      { key: "a", text: "HDMI" },
      { key: "b", text: "USB" },
      { key: "c", text: "VGA" },
      { key: "d", text: "Ethernet" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The Arduino UNO uses a USB interface to connect to a computer. The USB connection can be used to upload programs to the board and also provide power during development."
  },
  {
    id: "w5-q7",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 7,
    questionText: "What is the conventional starting index of an array in Arduino programming?",
    options: [
      { key: "a", text: "-1" },
      { key: "b", text: "0" },
      { key: "c", text: "1" },
      { key: "d", text: "2" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "As in C and C++, Arduino arrays use zero-based indexing. Therefore, the first element is stored at index 0."
  },
  {
    id: "w5-q8",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 8,
    questionText: "Which Arduino function is used to generate a pseudo-random number within a specified range?",
    options: [
      { key: "a", text: "random()" },
      { key: "b", text: "pinMode()" },
      { key: "c", text: "digitalWrite()" },
      { key: "d", text: "attachInterrupt()" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The random() function generates a pseudo-random number in a specified range. For example, random(max) produces a value within the range defined by max."
  },
  {
    id: "w5-q9",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 9,
    questionText: "In the traffic-control example, which LED is switched ON first to represent the GO signal?",
    options: [
      { key: "a", text: "Red LED" },
      { key: "b", text: "Yellow LED" },
      { key: "c", text: "Green LED" },
      { key: "d", text: "All three LEDs simultaneously" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The traffic() function first sets the green LED HIGH and displays the GO message. After a delay, it switches to yellow and then red."
  },
  {
    id: "w5-q10",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 10,
    questionText: "Which quantities are measured by a DHT sensor?",
    options: [
      { key: "a", text: "Temperature and humidity" },
      { key: "b", text: "Distance and speed" },
      { key: "c", text: "Light and sound" },
      { key: "d", text: "Pressure and altitude" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "A DHT sensor measures the temperature and humidity of its surroundings."
  },
  {
    id: "w5-q11",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 11,
    questionText: "What does a sensor convert a physical quantity into?",
    options: [
      { key: "a", text: "A software program" },
      { key: "b", text: "Mechanical motion" },
      { key: "c", text: "A network address" },
      { key: "d", text: "An electrical signal" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "A sensor is an electronic element that converts a physical quantity or measurement into an electrical signal."
  },
  {
    id: "w5-q12",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 12,
    questionText: "In the DHT sensor sketch, delay(2000) causes successive readings to be printed after approximately how much time?",
    options: [
      { key: "a", text: "0.2 seconds" },
      { key: "b", text: "1 second" },
      { key: "c", text: "2 seconds" },
      { key: "d", text: "20 seconds" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The delay() function takes time in milliseconds. Therefore, delay(2000) introduces a delay of 2000 milliseconds, which equals 2 seconds."
  },
  {
    id: "w5-q13",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 13,
    questionText: "State whether the following statement is True or False. Statement: A servo motor is a low-precision motor used only for linear motion.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "A servo motor is a high-precision motor that provides controlled rotary motion."
  },
  {
    id: "w5-q14",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 14,
    questionText: "Which device provides controlled rotary motion?",
    options: [
      { key: "a", text: "Ultrasonic sensor" },
      { key: "b", text: "DHT sensor" },
      { key: "c", text: "PIR sensor" },
      { key: "d", text: "Servo motor" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "A servo motor is an actuator that provides precise and controlled rotary motion."
  },
  {
    id: "w5-q15",
    moduleId: "week-5",
    weekLabel: "Week 5",
    questionNumber: 15,
    questionText: "State whether the following statement is True or False. Statement: A stepper motor is a type of actuator.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "A stepper motor is one of the motor actuators discussed in the lecture. Other examples include servo motors, hydraulic motors, solenoids, relays, and AC motors."
  },

  // ==========================================
  // WEEK 6: ASSIGNMENT 6 (Provided by user)
  // ==========================================
  {
    id: "w6-q1",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 1,
    questionText: "What are the five basic data types available in Python, as introduced in the lecture?",
    options: [
      { key: "a", text: "Numbers, Strings, List, Tuple, Dictionary" },
      { key: "b", text: "Integer, Float, Boolean, Char, Byte" },
      { key: "c", text: "Array, Struct, Class, Object, Set" },
      { key: "d", text: "Numbers, Strings, Queue, Stack, Graph" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The lecture states that Python has five data types: Numbers, String, List, Tuple, and Dictionary."
  },
  {
    id: "w6-q2",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 2,
    questionText: "Which keyword is used to define a function in Python?",
    options: [
      { key: "a", text: "func" },
      { key: "b", text: "def" },
      { key: "c", text: "define" },
      { key: "d", text: "function" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A function in Python is defined using the def keyword, followed by the function name and its arguments."
  },
  {
    id: "w6-q3",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 3,
    questionText: "In Python's exception handling, which keyword is used to handle an exception raised inside the try block?",
    options: [
      { key: "a", text: "catch" },
      { key: "b", text: "except" },
      { key: "c", text: "handle" },
      { key: "d", text: "rescue" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Python uses the try, except and else block structure for exception handling; the except block catches the exception raised in the try block."
  },
  {
    id: "w6-q4",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 4,
    questionText: "Which mode of Python's open() function is used to add data to the end of an existing file without erasing its existing content?",
    options: [
      { key: "a", text: "r (read mode)" },
      { key: "b", text: "w (write mode)" },
      { key: "c", text: "a (append mode)" },
      { key: "d", text: "r+ (read and write mode)" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Python supports four basic file modes: r (read), w (write), a (append), and r+ (read and write). The append mode adds new data to the end of the file without deleting existing content."
  },
  {
    id: "w6-q5",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 5,
    questionText: "Which Python library, installable via pip, is used for image read/write operations as covered in the lecture?",
    options: [
      { key: "a", text: "NumPy" },
      { key: "b", text: "PIL/Pillow" },
      { key: "c", text: "OpenCV" },
      { key: "d", text: "Matplotlib" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "PIL (Python Image Library) is used to work with image files. It is installed using 'sudo pip install pillow'; PIL supports up to Python 2.7 while Pillow supports Python 3.x."
  },
  {
    id: "w6-q6",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 6,
    questionText: "Which socket_type value is used while creating a TCP/IP socket in Python's socket module?",
    options: [
      { key: "a", text: "SOCK_DGRAM" },
      { key: "b", text: "SOCK_STREAM" },
      { key: "c", text: "SOCK_RAW" },
      { key: "d", text: "SOCK_SEQPACKET" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A socket is created using socket.socket(socket_family, socket_type, protocol). For a TCP/IP (connection-oriented) socket, socket_family is AF_INET and socket_type is SOCK_STREAM."
  },
  {
    id: "w6-q7",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 7,
    questionText: "How many GPIO pins does the Raspberry Pi 3 Model B have, as shown in the specifications table?",
    options: [
      { key: "a", text: "26" },
      { key: "b", text: "32" },
      { key: "c", text: "40" },
      { key: "d", text: "44" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "As per the specifications table, the Raspberry Pi 3 Model B, Raspberry Pi 2 Model B, and Raspberry Pi Zero all have 40 GPIO pins."
  },
  {
    id: "w6-q8",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 8,
    questionText: "Which of the following is an officially supported operating system for Raspberry Pi mentioned in the lecture?",
    options: [
      { key: "a", text: "Raspbian" },
      { key: "b", text: "Windows XP" },
      { key: "c", text: "macOS" },
      { key: "d", text: "Solaris" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Raspbian and NOOBS are the officially supported operating systems for Raspberry Pi. Ubuntu Mate, Snappy Ubuntu Core, Windows 10 Core, Pinet, and RISC OS are examples of third-party operating systems."
  },
  {
    id: "w6-q9",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 9,
    questionText: "Raspberry Pi is best described as a:",
    options: [
      { key: "a", text: "Printer" },
      { key: "b", text: "Smartphone" },
      { key: "c", text: "Wi-Fi router" },
      { key: "d", text: "Single-board computer" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "The lecture introduces Raspberry Pi as a computer that fits in your palm a low-cost, single-board computer that is easy to access and use."
  },
  {
    id: "w6-q10",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 10,
    questionText: "Which command is used to install the GPIO library on Raspberry Pi before programming the blinking LED example?",
    options: [
      { key: "a", text: "sudo apt-get install python-rpi.gpio" },
      { key: "b", text: "pip install gpio" },
      { key: "c", text: "sudo apt-get install led-lib" },
      { key: "d", text: "npm install rpi-gpio" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "After installing Python development tools using 'sudo apt-get install python-dev', the GPIO library is installed using 'sudo apt-get install python-rpi.gpio'."
  },
  {
    id: "w6-q11",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 11,
    questionText: "Where is the CSI camera connector slot located on the Raspberry Pi board?",
    options: [
      { key: "a", text: "Between the USB ports" },
      { key: "b", text: "Between the Ethernet port and the HDMI port" },
      { key: "c", text: "Next to the power supply pin" },
      { key: "d", text: "On the underside of the board" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The Raspberry Pi Camera connects through a dedicated CSI slot, which is placed between the Ethernet port and the HDMI port on the board."
  },
  {
    id: "w6-q12",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 12,
    questionText: "Which terminal command captures a still image using the Raspberry Pi camera?",
    options: [
      { key: "a", text: "raspistill -o image.jpg" },
      { key: "b", text: "raspicam capture" },
      { key: "c", text: "pi-camera snap" },
      { key: "d", text: "capture.py --img" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Running 'raspistill -o image.jpg' in the terminal captures an image using the Raspberry Pi camera and stores it as image.jpg."
  },
  {
    id: "w6-q13",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 13,
    questionText: "What does DHT stand for in the DHT sensor used with Raspberry Pi in the auto-cooling system?",
    options: [
      { key: "a", text: "Digital Heat Transfer" },
      { key: "b", text: "Digital Humidity and Temperature" },
      { key: "c", text: "Direct Hardware Trigger" },
      { key: "d", text: "Dual Humidity Thermostat" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "DHT stands for Digital Humidity and Temperature Sensor. It has 4 pins: PIN 1 (3.3V-5V power supply), PIN 2 (Data), PIN 3 (Null), and PIN 4 (Ground)."
  },
  {
    id: "w6-q14",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 14,
    questionText: "How many output terminals does the relay used in the temperature-dependent auto-cooling system have, as shown in the lecture?",
    options: [
      { key: "a", text: "2" },
      { key: "b", text: "3" },
      { key: "c", text: "4" },
      { key: "d", text: "5" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The relay is a mechanical/electromechanical switch with 3 output terminals (left to right): NO (normal open), Common, and NC (normal close)."
  },
  {
    id: "w6-q15",
    moduleId: "week-6",
    weekLabel: "Week 6",
    questionNumber: 15,
    questionText: "State whether the following statement is True or False. Statement: In the temperature-dependent auto-cooling system, the fan operates when the surrounding temperature rises above the threshold value specified in the code.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "The lecture demonstrates that the fan is switched on whenever the measured temperature exceeds the threshold value set in the program."
  },

  // ==========================================
  // WEEK 7 PART 1: MODULE 07 (Cloud & Virtualization)
  // ==========================================
  {
    id: "w7p1-q1",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 1,
    questionText: "What does Sensor-as-a-Service (SEaaS) enable in an IoT cloud architecture?",
    options: [
      { key: "a", text: "Physical replacement of sensor hardware periodically" },
      { key: "b", text: "Access to sensor data as a utility on a pay-per-use model" },
      { key: "c", text: "Elimination of wireless communications" },
      { key: "d", text: "Restriction of sensor feeds to single-user proprietary networks" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Sensor-as-a-Service enables multiple end-users to consume real-time sensor streams on-demand over the cloud on a pay-per-use basis."
  },
  {
    id: "w7p1-q2",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 2,
    questionText: "Which component in cloud virtualization is responsible for creating and running virtual machine instances?",
    options: [
      { key: "a", text: "Transducer" },
      { key: "b", text: "Hypervisor / Virtual Machine Monitor (VMM)" },
      { key: "c", text: "ADC multiplexer" },
      { key: "d", text: "ZigBee coordinator" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A hypervisor (or Virtual Machine Monitor) manages virtual machines, abstracting compute and storage resources from physical hardware."
  },
  {
    id: "w7p1-q3",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 3,
    questionText: "State True or False. Virtual Sensors allow multiple distinct applications to access the same physical sensor stream simultaneously with custom filtering.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Virtual Sensors decouple physical sensing hardware from applications, enabling multi-tenant resource sharing and dynamic composition."
  },
  {
    id: "w7p1-q4",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 4,
    questionText: "Which of the following are primary benefits of integrating Cloud Computing with IoT?",
    options: [
      { key: "a", text: "Elastic compute and high-capacity storage for big data" },
      { key: "b", text: "Global accessibility of device telemetries" },
      { key: "c", text: "Sophisticated analytics and machine learning processing" },
      { key: "d", text: "Complete elimination of device battery requirements" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Cloud provides scalable storage, massive compute, and global data access, but it does not eliminate the physical battery requirements of IoT endpoints."
  },
  {
    id: "w7p1-q5",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 5,
    questionText: "In cloud computing taxonomy, Multi-Tenancy refers to:",
    options: [
      { key: "a", text: "A single client running on multiple private datacenters" },
      { key: "b", text: "Multiple independent customers sharing underlying physical computing resources safely" },
      { key: "c", text: "A sensor node having multiple batteries" },
      { key: "d", text: "An operating system without file permissions" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Multi-tenancy allows cloud infrastructure to serve multiple independent tenants simultaneously with secure logical separation."
  },
  {
    id: "w7p1-q6",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 6,
    questionText: "State True or False. In Sensor-Cloud infrastructure, physical sensors can be dynamically pooled to compose a virtual sensor that covers a broader geographic boundary.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Sensor-Cloud enables optimal composition of physical nodes into composite virtual sensors across defined geographical boundaries."
  },
  {
    id: "w7p1-q7",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 7,
    questionText: "Which cloud service model provides a full ready-to-use software application accessible via a web browser (e.g., Salesforce, Google Workspace)?",
    options: [
      { key: "a", text: "IaaS" },
      { key: "b", text: "PaaS" },
      { key: "c", text: "SaaS" },
      { key: "d", text: "BaaS" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Software-as-a-Service (SaaS) delivers complete consumer-facing applications over the internet without requiring local installation or server maintenance."
  },
  {
    id: "w7p1-q8",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 8,
    questionText: "Which of the following are major challenges when transferring continuous high-volume IoT data streams to centralized cloud platforms?",
    options: [
      { key: "a", text: "High bandwidth consumption" },
      { key: "b", text: "Network latency delays for time-critical actions" },
      { key: "c", text: "Data privacy and security regulations" },
      { key: "d", text: "Absence of any cloud storage providers" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Bandwidth saturation, round-trip network latency, and data compliance/privacy are primary challenges of centralized cloud-only IoT setups."
  },
  {
    id: "w7p1-q9",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 9,
    questionText: "State True or False. Bare-metal (Type 1) hypervisors run directly on the host computer's physical hardware without an underlying host operating system.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Type 1 (native/bare-metal) hypervisors like VMware ESXi or Xen run directly on hardware, offering better performance than Type 2 (hosted) hypervisors."
  },
  {
    id: "w7p1-q10",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 10,
    questionText: "What role does the Gateway node play between local sensor networks and cloud platforms?",
    options: [
      { key: "a", text: "Protocol translation and preliminary data aggregation" },
      { key: "b", text: "Physical mechanical actuation only" },
      { key: "c", text: "Converting digital signals into analog sound waves" },
      { key: "d", text: "Formatting print layouts" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "IoT Gateways bridge local protocols (Zigbee, BLE, 6LoWPAN) to IP networks (Ethernet, Cellular, Wi-Fi) and perform filtering, compression, and aggregation."
  },
  {
    id: "w7p1-q11",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 11,
    questionText: "Which mechanism in cloud computing guarantees that consumers pay only for the exact computational resources consumed during runtime?",
    options: [
      { key: "a", text: "Measured service / Pay-per-use" },
      { key: "b", text: "Fixed yearly licensing" },
      { key: "c", text: "Open-source donation" },
      { key: "d", text: "Hardware sponsorship" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Measured service enables resource usage to be metered, reported, and billed transparently on a strict pay-as-you-go model."
  },
  {
    id: "w7p1-q12",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 12,
    questionText: "State True or False. In the Sensor-Cloud model, the end-user needs to own and deploy physical WSN motes in the field.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "In Sensor-Cloud, end-users do not deploy hardware. Sensor-owners own the hardware, and the Sensor-Cloud Service Provider (SCSP) rents virtual sensor instances to end-users."
  },
  {
    id: "w7p1-q13",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 13,
    questionText: "Which IoT data protocol is well-suited for lightweight telemetry ingestion directly into cloud brokers using a publish-subscribe pattern?",
    options: [
      { key: "a", text: "MQTT" },
      { key: "b", text: "BGP" },
      { key: "c", text: "SNMP" },
      { key: "d", text: "RIP" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "MQTT is the industry standard pub/sub protocol for streaming telemetry from edge devices to cloud message brokers like AWS IoT Core and Azure IoT Hub."
  },
  {
    id: "w7p1-q14",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 14,
    questionText: "Which of the following are examples of Platform-as-a-Service (PaaS) offerings?",
    options: [
      { key: "a", text: "Google App Engine" },
      { key: "b", text: "AWS Elastic Beanstalk" },
      { key: "c", text: "Heroku" },
      { key: "d", text: "Bare hard-drive barebone enclosure" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Google App Engine, AWS Elastic Beanstalk, and Heroku provide managed application platforms without the user managing low-level OS/VM maintenance."
  },
  {
    id: "w7p1-q15",
    moduleId: "week-7-1",
    weekLabel: "Week 7 (Part 1)",
    questionNumber: 15,
    questionText: "State True or False. Data serialization formats like JSON and Protocol Buffers are commonly used for formatting IoT sensor telemetry payload before transmission to cloud endpoints.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "JSON and Protobuf are ubiquitous data serialization formats for transmitting structured sensor payloads over HTTP and MQTT."
  },

  // ==========================================
  // WEEK 7 PART 2: MODULE 08 (Edge & Fog Computing)
  // ==========================================
  {
    id: "w7p2-q1",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 1,
    questionText: "What is the primary motivation for adopting Edge and Fog Computing alongside centralized cloud?",
    options: [
      { key: "a", text: "Decreasing physical sensor size" },
      { key: "b", text: "Reducing network latency and conserving uplink bandwidth" },
      { key: "c", text: "Increasing cloud subscription fees" },
      { key: "d", text: "Eliminating the need for microprocessors" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Edge/Fog computing shifts data processing closer to the data sources, minimizing transmission latency and preventing cloud bandwidth bottlenecks."
  },
  {
    id: "w7p2-q2",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 2,
    questionText: "State True or False. Edge computing processes data right on or in immediate proximity to the data-generating device, whereas Fog computing sits between the edge devices and the core cloud.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Edge computing resides directly on or adjacent to sensor devices; Fog computing acts as an intermediary decentralised layer between edge devices and the remote cloud."
  },
  {
    id: "w7p2-q3",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 3,
    questionText: "Which of the following IoT applications strictly require Fog/Edge computing due to sub-millisecond latency constraints?",
    options: [
      { key: "a", text: "Autonomous vehicle collision avoidance" },
      { key: "b", text: "Industrial robotics emergency shutdown" },
      { key: "c", text: "Monthly billing summary generation" },
      { key: "d", text: "Archived historical weather report indexing" }
    ],
    correctKeys: ["a", "b"],
    type: "msq",
    solution: "Safety-critical tasks like autonomous collision avoidance and emergency machinery shutdowns demand deterministic, real-time edge processing."
  },
  {
    id: "w7p2-q4",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 4,
    questionText: "Which node can serve as a Fog node in an industrial smart factory?",
    options: [
      { key: "a", text: "Industrial gateway / Edge router" },
      { key: "b", text: "Programmable Logic Controller (PLC)" },
      { key: "c", text: "Local micro-server" },
      { key: "d", text: "Passive RFID sticker without power" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Gateways, smart PLCs, and local micro-servers possess compute and storage to act as fog nodes. Unpowered passive RFID tags cannot execute compute workloads."
  },
  {
    id: "w7p2-q5",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 5,
    questionText: "State True or False. A fog computing layer can continue operating and making local decisions even during an unexpected WAN disconnection from the central cloud.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "High availability and offline autonomy are key advantages of Fog computing: local systems remain operational without wide-area internet connectivity."
  },
  {
    id: "w7p2-q6",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 6,
    questionText: "In distributed IoT analytics, data reduction at the edge is performed through:",
    options: [
      { key: "a", text: "Filtering out redundant consecutive readings" },
      { key: "b", text: "Local aggregation (averages, min/max calculations)" },
      { key: "c", text: "Transmitting every raw analog waveform indefinitely" },
      { key: "d", text: "Edge-based anomaly detection" }
    ],
    correctKeys: ["a", "b", "d"],
    type: "msq",
    solution: "Filtering unchanged data, computing rolling statistics, and flagging anomalies reduce the data volume that must be uploaded upstream."
  },
  {
    id: "w7p2-q7",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 7,
    questionText: "What is an important trade-off when implementing complex deep learning models directly on edge devices?",
    options: [
      { key: "a", text: "Resource constraints in memory, battery, and computing power" },
      { key: "b", text: "Excessive physical fiber cable length" },
      { key: "c", text: "Automatic replacement of the sensor" },
      { key: "d", text: "Inability to read binary numbers" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Edge devices feature tight power budgets and limited RAM/compute, necessitating model quantization and lightweight frameworks like TensorFlow Lite."
  },
  {
    id: "w7p2-q8",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 8,
    questionText: "State True or False. Fog computing replaces Cloud computing entirely, making central data centers obsolete.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["b"],
    type: "boolean",
    solution: "Fog computing complements the cloud. Fog handles time-sensitive local operations, while the cloud handles global coordination, archival, and heavy model training."
  },
  {
    id: "w7p2-q9",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 9,
    questionText: "Which architecture distributes computation seamlessly across the continuum from device to cloud?",
    options: [
      { key: "a", text: "Cloud-to-Thing continuum" },
      { key: "b", text: "Static dial-up network" },
      { key: "c", text: "Monolithic mainframe only" },
      { key: "d", text: "Pure peer-to-peer without hierarchy" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The Cloud-to-Thing (or Edge-to-Cloud) continuum represents an integrated multi-tier hierarchy spanning sensors, edge, fog, and cloud layers."
  },
  {
    id: "w7p2-q10",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 10,
    questionText: "Which of the following is an example of an open edge computing runtime for deploying containerized microservices on IoT gateways?",
    options: [
      { key: "a", text: "EdgeX Foundry" },
      { key: "b", text: "KubeEdge" },
      { key: "c", text: "Azure IoT Edge" },
      { key: "d", text: "MS Paint" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "EdgeX Foundry, KubeEdge, and Azure IoT Edge are established frameworks for deploying and orchestrating containerized microservices at the network edge."
  },
  {
    id: "w7p2-q11",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 11,
    questionText: "State True or False. Privacy is enhanced with edge computing because sensitive raw data (like video feeds or medical vitals) can be analyzed locally without transmitting raw streams to external third-party servers.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Edge processing allows personally identifiable information (PII) and raw biometric telemetry to be kept on-premise, transmitting only anonymized summaries."
  },
  {
    id: "w7p2-q12",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 12,
    questionText: "In smart agriculture, what is a key task delegated to an edge node placed directly in the field?",
    options: [
      { key: "a", text: "Automating irrigation valves based on real-time soil moisture thresholds" },
      { key: "b", text: "Re-installing cellular towers manually" },
      { key: "c", text: "Running enterprise tax audits" },
      { key: "d", text: "Producing fertilizer chemically" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "An agricultural edge controller reads local moisture sensors and immediately controls actuator valves for water management without cloud round-trip delay."
  },
  {
    id: "w7p2-q13",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 13,
    questionText: "Which communication protocols are commonly used between IoT sensors and edge gateways?",
    options: [
      { key: "a", text: "Bluetooth Low Energy (BLE)" },
      { key: "b", text: "ZigBee" },
      { key: "c", text: "LoRaWAN" },
      { key: "d", text: "Optical carrier OC-768 exclusively" }
    ],
    correctKeys: ["a", "b", "c"],
    type: "msq",
    solution: "Low-power short/long range wireless protocols like BLE, ZigBee, and LoRaWAN connect physical end-devices to edge aggregators."
  },
  {
    id: "w7p2-q14",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 14,
    questionText: "State True or False. Federated Learning allows IoT edge devices to collaboratively train a shared machine learning model without transmitting their raw training data to a central cloud server.",
    options: [
      { key: "a", text: "True" },
      { key: "b", text: "False" }
    ],
    correctKeys: ["a"],
    type: "boolean",
    solution: "Federated learning sends model weight parameter updates to an aggregator rather than raw dataset samples, preserving device data privacy."
  },
  {
    id: "w7p2-q15",
    moduleId: "week-7-2",
    weekLabel: "Week 7 (Part 2)",
    questionNumber: 15,
    questionText: "What happens when an edge node experiences a power failure?",
    options: [
      { key: "a", text: "The entire internet stops functioning" },
      { key: "b", text: "Only the local sensors connected to that specific edge gateway are temporarily disconnected or routed to backup nodes" },
      { key: "c", text: "All data across all continents is wiped" },
      { key: "d", text: "The cloud server is physically destroyed" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Decentralized architectures localize hardware faults: if an edge node fails, only its local sub-network is affected while other nodes and cloud continue running."
  },

  // ==========================================
  // WEEK 8: ASSIGNMENT 8 (Provided by user)
  // ==========================================
  {
    id: "w8-q1",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 1,
    questionText: "Which of the following is listed as a problem in traditional (non-SDN) mobile networks?",
    options: [
      { key: "a", text: "Too flexible hardware architecture" },
      { key: "b", text: "Excess centralized control" },
      { key: "c", text: "Very low operational cost" },
      { key: "d", text: "Difficult to scale due to static, over-provisioned networks" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Traditional mobile networks are difficult to scale because static, over-provisioned networks are inflexible to manage high-demand mobile traffic; they are also difficult to manage, inflexible, and cost-expensive."
  },
  {
    id: "w8-q2",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 2,
    questionText: "In the ODIN architecture for software-defined wireless networks, what does the 'Odin agent' do?",
    options: [
      { key: "a", text: "It is placed at the controller end to manage policies" },
      { key: "b", text: "It replaces the OpenFlow protocol entirely" },
      { key: "c", text: "It is placed with the physical devices to communicate with the controller" },
      { key: "d", text: "It performs billing for cloud resources" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "In ODIN, an agent is placed at access points (with the physical devices) to communicate with the controller, while the Odin master resides at the controller end."
  },
  {
    id: "w8-q3",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 3,
    questionText: "What is the primary goal of Mobi-Flow's proactive rule placement approach in Software-Defined IoT?",
    options: [
      { key: "a", text: "To place flow-rules randomly across all access points" },
      { key: "b", text: "To predict users' future location and place flow-rules at APs accordingly" },
      { key: "c", text: "To eliminate the need for a controller" },
      { key: "d", text: "To increase the number of PACKET-IN messages" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Mobi-Flow predicts the location of end-users at time (t+1) while they are at time (t), and places flow-rules at the access points that can be associated with the users based on their predicted locations, using an order-K Markov predictor."
  },
  {
    id: "w8-q4",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 4,
    questionText: "Which simulation tool is mentioned in the lecture for experimenting with wireless software-defined networks, supporting both wired and wireless (IEEE 802.11) protocols?",
    options: [
      { key: "a", text: "CloudSim" },
      { key: "b", text: "NS2" },
      { key: "c", text: "GreenCloud" },
      { key: "d", text: "Mininet-WiFi" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Mininet-WiFi can be used to deploy a network supporting both wired (Ethernet) and wireless (WiFi, IEEE 802.11) protocols, while ONOS can be used to place the controllers."
  },
  {
    id: "w8-q5",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 5,
    questionText: "According to the NIST definition quoted in the lecture, cloud computing enables on-demand network access to a shared pool of what?",
    options: [
      { key: "a", text: "Fixed, dedicated hardware resources" },
      { key: "b", text: "Configurable computing resources" },
      { key: "c", text: "Only storage resources" },
      { key: "d", text: "Only networking resources" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "NIST defines cloud computing as a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources such as networks, servers, storage, and applications."
  },
  {
    id: "w8-q6",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 6,
    questionText: "Which of the following is one of the essential characteristics of cloud computing as defined by NIST?",
    options: [
      { key: "a", text: "Rapid elasticity" },
      { key: "b", manual: false, text: "Manual resource allocation" },
      { key: "c", text: "Single-tenant only access" },
      { key: "d", text: "Fixed billing regardless of usage" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "NIST lists rapid elasticity as an essential characteristic, meaning cloud resource allocation and release should be rapid, elastic, and automatic, giving consumers the impression of infinite resources."
  },
  {
    id: "w8-q7",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 7,
    questionText: "Which cloud deployment model is set up for the exclusive use of a single organization, typically managed on-premises or by a third party off-premises?",
    options: [
      { key: "a", text: "Public cloud" },
      { key: "b", text: "Private cloud" },
      { key: "c", text: "Community cloud" },
      { key: "d", text: "Multi-cloud" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "A private cloud is a cloud set-up functioned only for a single organization, typically managed by the organization itself (on-premises) or by a third party (off-premises)."
  },
  {
    id: "w8-q8",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 8,
    questionText: "Which of the following is given as an example of a public cloud provider in the lecture?",
    options: [
      { key: "a", text: "Amazon Web Services (AWS)" },
      { key: "b", text: "A company's internal private data center" },
      { key: "c", text: "A single organization's dedicated server room" },
      { key: "d", text: "A community-only cloud shared by hospitals" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Public cloud examples given include Amazon Web Services (AWS), Google Compute Engine, and Microsoft Azure cloud set-ups available for the use of any person or industry."
  },
  {
    id: "w8-q9",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 9,
    questionText: "Which cloud service model provides on-demand delivery of computing infrastructure such as servers, storage, network, and operating system?",
    options: [
      { key: "a", text: "SaaS" },
      { key: "b", text: "PaaS" },
      { key: "c", text: "IaaS" },
      { key: "d", text: "DBaaS" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Infrastructure-as-a-Service (IaaS) contains the basic building blocks for cloud IT, providing access to networking features, computers (virtual or dedicated hardware), storage, and operating systems."
  },
  {
    id: "w8-q10",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 10,
    questionText: "In the IaaS working methodology, which component allows multiple virtual machines to share the same physical hardware?",
    options: [
      { key: "a", text: "DNS server" },
      { key: "b", text: "Load balancer" },
      { key: "c", text: "Firewall" },
      { key: "d", text: "Hypervisor" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "In IaaS, the hypervisor sits above the physical hardware and manages multiple virtual machines (VMs), each running its own operating system, on a virtualized server."
  },
  {
    id: "w8-q11",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 11,
    questionText: "Which cloud service model is described as 'application middleware offered as a service to developers', removing the need to manage underlying hardware and operating systems?",
    options: [
      { key: "a", text: "IaaS" },
      { key: "b", text: "SaaS" },
      { key: "c", text: "PaaS" },
      { key: "d", text: "Community Cloud" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Platform-as-a-Service (PaaS) removes the need for organizations to manage underlying infrastructure (hardware and OS) and lets developers focus on deploying and managing their applications; it is described as application middleware offered as a service."
  },
  {
    id: "w8-q12",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 12,
    questionText: "What is the primary purpose of a Service Level Agreement (SLA) in cloud service management?",
    options: [
      { key: "a", text: "To define the physical location of the data center" },
      { key: "b", text: "To define the non-functional requirements expected from the service provider" },
      { key: "c", text: "To specify the programming language used by the cloud provider" },
      { key: "d", text: "To list the hardware vendors used by the provider" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "An SLA defines the non-functional requirements expected from the service provider and provides a roadmap with clearly defined deliverables, describing the quality, utility, and warranty of services expected by the customer."
  },
  {
    id: "w8-q13",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 13,
    questionText: "In cloud service accounting and billing, what does 'service accounting' primarily aim to obtain?",
    options: [
      { key: "a", text: "Resource usage information, typically in the form of records" },
      { key: "b", text: "The physical address of end-users" },
      { key: "c", text: "The source code of hosted applications" },
      { key: "d", text: "The marketing budget of the provider" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Service accounting aims to obtain resource usage information, typically in the form of records, depending on infrastructure and service monitoring where usage information is obtained from metric measurements."
  },
  {
    id: "w8-q14",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 14,
    questionText: "What is the main purpose of using cloud simulators such as CloudSim before actual deployment?",
    options: [
      { key: "a", text: "To permanently replace the need for real cloud infrastructure" },
      { key: "b", text: "To physically manufacture cloud hardware" },
      { key: "c", text: "To increase the billing cost of cloud services" },
      { key: "d", text: "To provide a reliable, scalable, and repeatable environment for pre-deployment performance evaluation" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Simulation tools provide a reliable, scalable, and repeatable environment for performance evaluation, facilitating pre-deployment tests of services at no cost and enabling repeatable evaluation."
  },
  {
    id: "w8-q15",
    moduleId: "week-8",
    weekLabel: "Week 8",
    questionNumber: 15,
    questionText: "CloudSim, a widely used cloud simulation framework, was developed at which institution and is based on which programming language?",
    options: [
      { key: "a", text: "Stanford University, based on Python" },
      { key: "b", text: "CLOUDS Lab, University of Melbourne, based on Java" },
      { key: "c", text: "MIT, based on C++" },
      { key: "d", text: "IIT Kharagpur, based on JavaScript" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "CloudSim is a simulation framework that models cloud computing environments (data centers, VMs, applications, users, and network topology), written in a Java-based environment, and developed at the CLOUDS Lab of the University of Melbourne."
  },

  // ==========================================
  // WEEK 9: ASSIGNMENT 9 (Provided by user)
  // ==========================================
  {
    id: "w9-q1",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 1,
    questionText: "OpenStack was launched in 2010 as a joint project between Rackspace Hosting and which other organization?",
    options: [
      { key: "a", text: "Google" },
      { key: "b", text: "Microsoft" },
      { key: "c", text: "NASA" },
      { key: "d", text: "IBM" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "OpenStack was officially launched in 2010 as a joint open-source cloud computing project between Rackspace Hosting and NASA."
  },
  {
    id: "w9-q2",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 2,
    questionText: "Which OpenStack component provides the dashboard (GUI) that gives an overview of the other components?",
    options: [
      { key: "a", text: "Nova" },
      { key: "b", text: "Keystone" },
      { key: "c", text: "Horizon" },
      { key: "d", text: "Swift" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Horizon is the OpenStack dashboard that provides a web-based user interface to OpenStack services including Nova, Swift, Keystone, and others."
  },
  {
    id: "w9-q3",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 3,
    questionText: "Which OpenStack component is the compute service where instances are launched?",
    options: [
      { key: "a", text: "Nova" },
      { key: "b", text: "Glance" },
      { key: "c", text: "Cinder" },
      { key: "d", text: "Neutron" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Nova is the primary computing fabric controller in OpenStack, responsible for deploying and managing virtual machine instances."
  },
  {
    id: "w9-q4",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 4,
    questionText: "Which script/tool is used in the lecture to install OpenStack, requiring the local.conf file to be configured with passwords and host IP before running?",
    options: [
      { key: "a", text: "stack.sh via Devstack" },
      { key: "b", text: "docker-compose" },
      { key: "c", text: "kubeadm" },
      { key: "d", text: "ansible-playbook" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "DevStack utilizes the stack.sh script driven by configurations specified inside the local.conf file for rapid local deployment."
  },
  {
    id: "w9-q5",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 5,
    questionText: "According to the lecture, what does sensor-cloud fundamentally provide, beyond merely integrating sensors with cloud computing?",
    options: [
      { key: "a", text: "A physical replacement for all sensor hardware" },
      { key: "b", text: "Virtualization of sensor nodes, offered on a pay-per-use basis" },
      { key: "c", text: "A way to eliminate the need for a sink node" },
      { key: "d", text: "Free unlimited sensor deployment" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Sensor-cloud fundamentally virtualizes physical sensor nodes into dynamically manageable virtual sensors accessible on a multi-tenant, pay-per-use model."
  },
  {
    id: "w9-q6",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 6,
    questionText: "In a traditional Wireless Sensor Network (WSN), who is typically responsible for redeployment of the sensor nodes?",
    options: [
      { key: "a", text: "The Sensor-Cloud Service Provider (SCSP)" },
      { key: "b", text: "The end-user of the sensor-cloud" },
      { key: "c", text: "The WSN-user" },
      { key: "d", text: "A third-party auditor" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "In traditional single-purpose WSNs, the WSN-user has to bear all deployment, maintenance, and redeployment burdens."
  },
  {
    id: "w9-q7",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 7,
    questionText: "In the sensor-cloud model, which actor purchases physical sensor devices and lends them to the sensor-cloud, playing a role from a business perspective?",
    options: [
      { key: "a", text: "End-user" },
      { key: "b", text: "Sensor-owner" },
      { key: "c", text: "Sensor-Cloud Service Provider (SCSP)" },
      { key: "d", text: "WSN-user" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The sensor-owner purchases physical sensing hardware and registers it with the sensor-cloud platform to earn revenue from service utilization."
  },
  {
    id: "w9-q8",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 8,
    questionText: "Which of the following is listed as a major limitation of traditional WSNs that motivates the sensor-cloud model?",
    options: [
      { key: "a", text: "Unlimited scalability at zero cost" },
      { key: "b", text: "Difficulty adapting to a change of requirement (e.g. moving from agriculture to smart home use)" },
      { key: "c", text: "Excessive availability of skilled vendors" },
      { key: "d", text: "No need for maintenance" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Traditional WSNs are rigidly application-specific and lack agility when operational requirements change, motivating dynamic virtualization in sensor-cloud."
  },
  {
    id: "w9-q9",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 9,
    questionText: "In the Optimal Composition of Virtual Sensors, what does CoV-I refer to?",
    options: [
      { key: "a", text: "Composition of virtual sensors spanning multiple geographic regions" },
      { key: "b", text: "Composition of virtual sensors using only homogeneous nodes within the same geographic region" },
      { key: "c", text: "A pricing model for sensor-cloud" },
      { key: "d", text: "A caching mechanism for sensor data" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "CoV-I refers to the composition of virtual sensors using homogeneous nodes within the same geographic region."
  },
  {
    id: "w9-q10",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 10,
    questionText: "In the sensor-cloud caching mechanism, which cache handles requests directly from the end-user and decides whether to serve data directly or re-cache from another source?",
    options: [
      { key: "a", text: "External Cache (EC)" },
      { key: "b", text: "Sensor Cache (SC)" },
      { key: "c", text: "Distributed Cache (DC)" },
      { key: "d", text: "Internal Cache (IC)" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "The Internal Cache (IC) serves incoming end-user requests directly if valid cached telemetry exists, minimizing redundant transmissions from physical sensors."
  },
  {
    id: "w9-q11",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 11,
    questionText: "Why is dynamic and adaptive data caching useful in sensor-cloud, according to the lecture?",
    options: [
      { key: "a", text: "Because environmental conditions always change extremely fast" },
      { key: "b", text: "Because it removes the need for a sensor-owner" },
      { key: "c", text: "Because caching eliminates the need for virtualization" },
      { key: "d", text: "Because unnecessary sensing during slow environmental change wastes energy" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "When physical parameters vary slowly, repetitive high-frequency sensing drains node battery unnecessarily; adaptive caching reuses valid recent data."
  },
  {
    id: "w9-q12",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 12,
    questionText: "Which company is credited with coining the term 'fog computing'?",
    options: [
      { key: "a", text: "Google" },
      { key: "b", text: "Amazon" },
      { key: "c", text: "CISCO" },
      { key: "d", text: "IBM" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Cisco Systems coined the term 'Fog Computing' in 2012 to describe decentralized compute, storage, and networking closer to ground IoT endpoints."
  },
  {
    id: "w9-q13",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 13,
    questionText: "Which of the following is listed as a key issue with the traditional cloud model that motivates fog computing?",
    options: [
      { key: "a", text: "Excess bandwidth availability" },
      { key: "b", text: "Volume, latency, and bandwidth limitations of the cloud" },
      { key: "c", text: "Too much local processing power at the device level" },
      { key: "d", text: "Absence of any IoT devices" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Massive telemetry volumes, round-trip network delays, and bandwidth constraints motivate offloading computations to intermediary fog nodes."
  },
  {
    id: "w9-q14",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 14,
    questionText: "Where is the fog layer positioned in the fog computing architecture?",
    options: [
      { key: "a", text: "Above the cloud layer" },
      { key: "b", text: "Between the cloud and the IoT devices" },
      { key: "c", text: "Inside each IoT device only" },
      { key: "d", text: "There is no fixed position; it replaces the cloud entirely" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Fog nodes sit logically and physically between edge IoT devices and remote centralized cloud data centers."
  },
  {
    id: "w9-q15",
    moduleId: "week-9",
    weekLabel: "Week 9",
    questionNumber: 15,
    questionText: "Which of the following is NOT listed as a required characteristic of a fog node?",
    options: [
      { key: "a", text: "Storage (transient)" },
      { key: "b", text: "Computing facility for quick decisions" },
      { key: "c", text: "Network connectivity" },
      { key: "d", text: "Permanent, unlimited archival storage" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Fog nodes have localized transient storage and agile compute; permanent, massive archival storage is retained by central cloud systems."
  },

  // ==========================================
  // WEEK 10: ASSIGNMENT 10 (Provided by user)
  // ==========================================
  {
    id: "w10-q1",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 1,
    questionText: "In the analogy comparing humans to smart cities presented in the lecture, what do 'Sensors and Tags' correspond to?",
    options: [
      { key: "a", text: "Skeleton" },
      { key: "b", text: "Nerves" },
      { key: "c", text: "Sensory Organs" },
      { key: "d", text: "Brain" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "In the smart city analogy, Sensors and Tags function as Sensory Organs, network links act as Nerves, and the data processing cloud acts as the Brain."
  },
  {
    id: "w10-q2",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 2,
    questionText: "Which of the following is listed as one of the six 'Application Focus Areas' of a smart city?",
    options: [
      { key: "a", text: "Smart Economy" },
      { key: "b", text: "Smart Bandwidth" },
      { key: "c", text: "Smart Voltage" },
      { key: "d", text: "Smart Currency" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "The six classical dimensions of smart cities include Smart Economy, Smart People, Smart Governance, Smart Mobility, Smart Environment, and Smart Living."
  },
  {
    id: "w10-q3",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 3,
    questionText: "Under 'Current Focus Areas' of smart cities, which application area specifically deals with auto routing of vehicles to empty slots and detecting vacant slots?",
    options: [
      { key: "a", text: "Smart Homes" },
      { key: "b", text: "Smart Energy" },
      { key: "c", text: "Smart Health" },
      { key: "d", text: "Smart Parking Lots" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Smart Parking Lots utilize optical and ultrasonic occupancy sensors to route inbound vehicles directly to available vacant spots."
  },
  {
    id: "w10-q4",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 4,
    questionText: "Which IoT challenge in smart cities relates to the risk of data leakage arising from multiple tenants sharing the same infrastructure?",
    options: [
      { key: "a", text: "Reliability" },
      { key: "b", text: "Heterogeneity" },
      { key: "c", text: "Security and Privacy" },
      { key: "d", text: "Legal and Social aspects" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Security and Privacy encompasses multi-tenant isolation, authorization, and safeguarding sensitive citizen telemetry against eavesdropping."
  },
  {
    id: "w10-q5",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 5,
    questionText: "What is the primary purpose of data fusion in IoT-enabled smart city environments, as described in the lecture?",
    options: [
      { key: "a", text: "To delete redundant sensors from the network" },
      { key: "b", text: "To make the large incoming data volume precise and accurate for better decision making" },
      { key: "c", text: "To replace the need for any sensors" },
      { key: "d", text: "To increase network latency intentionally" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Data fusion integrates heterogeneous sensor readings to synthesize higher-accuracy, reliable, and noise-filtered situational insights."
  },
  {
    id: "w10-q6",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 6,
    questionText: "Which data fusion challenge refers to the situation where the same type of sensor reports different data for the same location?",
    options: [
      { key: "a", text: "Imperfection" },
      { key: "b", text: "Ambiguity" },
      { key: "c", text: "Conflicts" },
      { key: "d", text: "Alignment" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Conflicts occur when multiple sensors monitoring identical phenomena produce contradictory readings due to calibration drift or faults."
  },
  {
    id: "w10-q7",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 7,
    questionText: "In the stages of data fusion, at which level does the fusion of information happen at the sensor node or within the local network itself?",
    options: [
      { key: "a", text: "Decision level" },
      { key: "b", text: "Feature level" },
      { key: "c", text: "Pixel level" },
      { key: "d", text: "Signal level" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Signal-level fusion operates directly upon raw sensory signals at or near the sensor transducer level before feature extraction."
  },
  {
    id: "w10-q8",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 8,
    questionText: "Which of the following is listed as one of the three functional layers of a smart parking system?",
    options: [
      { key: "a", text: "Information Collection" },
      { key: "b", text: "Fuel Refilling" },
      { key: "c", text: "Vehicle Manufacturing" },
      { key: "d", text: "Traffic Signal Coloring" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "A smart parking architecture comprises Information Collection, System Processing, and Service Distribution layers."
  },
  {
    id: "w10-q9",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 9,
    questionText: "In the classification of energy harvesting solutions for smart cities, which type involves energy sources intentionally deployed near IoT devices?",
    options: [
      { key: "a", text: "Ambient energy harvesting" },
      { key: "b", text: "Passive harvesting" },
      { key: "c", text: "Grid-tied harvesting" },
      { key: "d", text: "Dedicated energy harvesting" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Dedicated energy harvesting relies on deliberately deployed RF power transmitters or inductive chargers located near target nodes."
  },
  {
    id: "w10-q10",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 10,
    questionText: "Which Home Area Network (HAN) standard is defined by IEEE 802.15.4 at the physical and MAC layers, and aims at low-cost, low-energy devices?",
    options: [
      { key: "a", text: "UPnP" },
      { key: "b", text: "DLNA" },
      { key: "c", text: "Zigbee" },
      { key: "d", text: "X-10" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Zigbee utilizes IEEE 802.15.4 for physical and link layers, offering mesh networking with low power consumption for residential automation."
  },
  {
    id: "w10-q11",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 11,
    questionText: "Which HAN standard enables remote control of compliant devices over existing power lines and electrical wiring in a house, and is mainly used for lighting and appliance control?",
    options: [
      { key: "a", text: "Konnex (KNX)" },
      { key: "b", text: "UPnP" },
      { key: "c", text: "LonWorks" },
      { key: "d", text: "X-10" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "X-10 is a legacy home automation protocol that modulates RF bursts onto 120V/240V AC power wiring to toggle lighting and domestic appliances."
  },
  {
    id: "w10-q12",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 12,
    questionText: "According to the lecture, why does traditional TCP/IP fail to work well for Vehicle-to-Everything (V2X) communication?",
    options: [
      { key: "a", text: "TCP/IP was designed mainly for single-pair information exchange dependent on data location" },
      { key: "b", text: "TCP/IP cannot be used with any wireless devices" },
      { key: "c", text: "TCP/IP requires no IP addresses at all" },
      { key: "d", text: "TCP/IP works only in stationary networks with no scalability limits" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "TCP/IP binds communication tightly to specific host IP endpoints, which breaks rapidly under high vehicle mobility and intermittent ad-hoc link handovers."
  },
  {
    id: "w10-q13",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 13,
    questionText: "Which frequency spectrum did the US Department of Transport and FCC allocate for Intelligent Connected Vehicles (ICVs)?",
    options: [
      { key: "a", text: "2.4 GHz ISM band" },
      { key: "b", text: "75 MHz (5850-5925 MHz)" },
      { key: "c", text: "900 MHz band" },
      { key: "d", text: "60 GHz mmWave band" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The FCC allocated 75 MHz of dedicated spectrum in the 5.9 GHz band (5850–5925 MHz) for Dedicated Short Range Communications (DSRC) and ICVs."
  },
  {
    id: "w10-q14",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 14,
    questionText: "In the phases of ICV development described in the lecture, which phase is based on 4G LTE or DSRC and focuses on intelligent transportation services?",
    options: [
      { key: "a", text: "Phase-1" },
      { key: "b", text: "Phase-2" },
      { key: "c", text: "Phase-3" },
      { key: "d", text: "Phase-0" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Phase-2 of ICV evolution integrates DSRC and 4G LTE telematics to implement cooperative vehicular safety and active route optimization."
  },
  {
    id: "w10-q15",
    moduleId: "week-10",
    weekLabel: "Week 10",
    questionNumber: 15,
    questionText: "In the VANET domain classification, which domain consists of vehicles (mobile) and Road-Side Units (RSUs, static), communicating via V2V or V2I using the DSRC stack?",
    options: [
      { key: "a", text: "In-Vehicle Domain" },
      { key: "b", text: "Cloud Domain" },
      { key: "c", text: "Infrastructure Domain" },
      { key: "d", text: "Ad-hoc Domain" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "The Ad-hoc Domain comprises on-board vehicular units (OBUs) and roadside transceivers (RSUs) engaging in spontaneous ad-hoc V2V and V2I exchanges."
  },

  // ==========================================
  // WEEK 11: ASSIGNMENT 11 (Provided by user)
  // ==========================================
  {
    id: "w11-q1",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 1,
    questionText: "According to the lecture, which feature distinguishes a smart grid from a traditional electrical grid?",
    options: [
      { key: "a", text: "Energy distribution is only one directional." },
      { key: "b", text: "Monitoring and restoration are always performed manually." },
      { key: "c", text: "It enables bidirectional flows of energy with two-way communication and control." },
      { key: "d", text: "Energy generation must occur only at centralized power plants." }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Smart grids establish bidirectional energy exchange and automated digital communications between consumer prosumers and utilities."
  },
  {
    id: "w11-q2",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 2,
    questionText: "What is the role of a smart meter in a smart home?",
    options: [
      { key: "a", text: "It generates electricity from renewable energy sources." },
      { key: "b", text: "It provides the Smart Grid interface between the consumer and the energy service provider." },
      { key: "c", text: "It replaces the home energy management system." },
      { key: "d", text: "It operates only as a one-way energy meter without information exchange." }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Smart meters bridge household consumption data to the utility provider, reporting time-stamped load metrics and receiving tariff updates."
  },
  {
    id: "w11-q3",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 3,
    questionText: "Under Time-of-Use pricing, when are consumers encouraged to operate smart appliances to reduce their energy cost?",
    options: [
      { key: "a", text: "During off-peak hours." },
      { key: "b", text: "Only during on-peak hours." },
      { key: "c", text: "Only when the grid has a blackout." },
      { key: "d", text: "At a fixed time independent of the grid load." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Time-of-Use (ToU) tariffs offer reduced electrical rates during off-peak hours to flatten grid demand spikes."
  },
  {
    id: "w11-q4",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 4,
    questionText: "In net metering, the consumer's final bill depends on which two energy flows?",
    options: [
      { key: "a", text: "Reactive power and communication traffic." },
      { key: "b", text: "Only the energy generated at centralized power plants." },
      { key: "c", text: "Only the energy stored in the consumer's battery." },
      { key: "d", text: "Energy inflow from the grid and energy outflow from the consumer to the grid." }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Net metering bills consumers for net consumption: energy pulled from the grid minus surplus rooftop solar energy exported back."
  },
  {
    id: "w11-q5",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 5,
    questionText: "Which device is used in a smart grid operation center to sample voltage and current for monitoring the transmission system?",
    options: [
      { key: "a", text: "Phasor Measurement Unit (PMU)." },
      { key: "b", text: "Data Aggregator Unit (DAU)." },
      { key: "c", text: "Smart appliance controller." },
      { key: "d", text: "Universal Power Line Bus." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "PMUs (synchrophasors) sample high-frequency AC waveforms synchronized to GPS time stamps, enabling real-time wide-area grid stability monitoring."
  },
  {
    id: "w11-q6",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 6,
    questionText: "Which of the following is a function of distribution intelligence in the smart grid?",
    options: [
      { key: "a", text: "Preventing all use of smart meters." },
      { key: "b", text: "Identifying the source of a power outage and supporting automatic power-flow restoration." },
      { key: "c", text: "Restricting the grid to one-way communication." },
      { key: "d", text: "Removing protection and control from feeder lines." }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "Distribution intelligence performs automated fault location, isolation, and service restoration (FLISR) to self-heal outage areas."
  },
  {
    id: "w11-q7",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 7,
    questionText: "In smart grid communication, what does a gateway connect?",
    options: [
      { key: "a", text: "Closely located smart meters to Data Aggregator Units (DAUs)." },
      { key: "b", text: "Only power plants directly to home appliances." },
      { key: "c", text: "PMUs directly to plug-in electric vehicles." },
      { key: "d", text: "Renewable generators directly to SCADA without intermediate communication." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Smart grid gateways aggregate neighborhood smart meters and backhaul their telemetry to regional Data Aggregator Units (DAUs)."
  },
  {
    id: "w11-q8",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 8,
    questionText: "Which type of attack compromises the availability of smart grid components or information by making them inaccessible when needed?",
    options: [
      { key: "a", text: "Net metering attack." },
      { key: "b", text: "Time synchronization attack." },
      { key: "c", text: "Data visualization attack." },
      { key: "d", text: "Denial of Service (DoS) attack." }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Denial of Service (DoS) attacks flood grid communication channels, preventing critical control signals from reaching sub-stations and switches."
  },
  {
    id: "w11-q9",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 9,
    questionText: "How is the Industrial Internet of Things (IIoT) described in the lecture?",
    options: [
      { key: "a", text: "An application of IoT in industries that links automation systems with enterprise, planning, and product lifecycle." },
      { key: "b", text: "A consumer-only network for home entertainment devices." },
      { key: "c", text: "A replacement for all industrial automation without networking." },
      { key: "d", text: "A system used only for storing data without machine communication." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "IIoT interconnects operational technology (OT) sensors and actuators with enterprise IT planning and supply-chain logistics systems."
  },
  {
    id: "w11-q10",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 10,
    questionText: "Which approach does the lecture associate with IIoT for adapting existing industrial systems?",
    options: [
      { key: "a", text: "Disconnect and isolate." },
      { key: "b", text: "Rip and replace." },
      { key: "c", text: "Wrap and re-use." },
      { key: "d", text: "Remove and discard." }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Rather than costly 'rip-and-replace' overhauls of heavy machinery, IIoT retrofits legacy industrial equipment using 'wrap-and-reuse' gateway adapters."
  },
  {
    id: "w11-q11",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 11,
    questionText: "According to the lecture, which technology is identified as the key enabling technology for vehicle-to-vehicle and vehicle-to-road communications in Intelligent Transportation Systems?",
    options: [
      { key: "a", text: "Universal Power Line Bus." },
      { key: "b", text: "Hadoop Distributed File System (HDFS)." },
      { key: "c", text: "Supervisory Control and Data Acquisition (SCADA)." },
      { key: "d", text: "Dedicated Short-Range Communications (DSRC)." }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "DSRC provides low-latency, high-reliability wireless data transfers for vehicular communication links (V2V and V2I)."
  },
  {
    id: "w11-q12",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 12,
    questionText: "In IIoT-based mining applications, which environmental parameters can be monitored using wireless sensor networks?",
    options: [
      { key: "a", text: "Air quality, poisonous gases, and oxygen level inside mines." },
      { key: "b", text: "Only the billing amount of mine workers." },
      { key: "c", text: "Only the color of mining equipment." },
      { key: "d", text: "Only the internet browsing history of operators." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Mine safety WSNs continuously measure methane, carbon monoxide, ambient oxygen, and temperature to alert workers to hazardous conditions."
  },
  {
    id: "w11-q13",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 13,
    questionText: "Which Big Data characteristic refers to biases, noise, and abnormality in data?",
    options: [
      { key: "a", text: "Value." },
      { key: "b", text: "Variability." },
      { key: "c", text: "Veracity." },
      { key: "d", text: "Volume." }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Veracity denotes data trustworthiness, accuracy, and noise levels within massive raw IoT telemetry feeds."
  },
  {
    id: "w11-q14",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 14,
    questionText: "During data pre-processing, what is the purpose of redundancy mitigation?",
    options: [
      { key: "a", text: "To prevent data from being collected." },
      { key: "b", text: "To intentionally duplicate every data item." },
      { key: "c", text: "To convert all structured data into images." },
      { key: "d", text: "To eliminate repeated data through detection, filtering, and compression." }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Redundancy mitigation eliminates duplicate readings from dense overlapping sensor deployments using deduplication and spatial filtering."
  },
  {
    id: "w11-q15",
    moduleId: "week-11",
    weekLabel: "Week 11",
    questionNumber: 15,
    questionText: "In Hadoop Distributed File System (HDFS), which node stores the actual data blocks?",
    options: [
      { key: "a", text: "Datanode." },
      { key: "b", text: "Namenode." },
      { key: "c", text: "Job Tracker." },
      { key: "d", text: "YARN Resource Negotiator only." }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "In HDFS, Datanodes store and serve data blocks across the cluster, while the Namenode maintains the directory tree and metadata."
  },

  // ==========================================
  // WEEK 12: ASSIGNMENT 12 (Provided by user)
  // ==========================================
  {
    id: "w12-q1",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 1,
    questionText: "Which type of data analysis is used for data that is categorical in nature?",
    options: [
      { key: "a", text: "Qualitative analysis" },
      { key: "b", text: "Quantitative analysis" },
      { key: "c", text: "Regression analysis" },
      { key: "d", text: "Analysis of variance" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Qualitative analysis handles non-numeric and categorical data, whereas quantitative analysis focuses on numerical and metric measurements."
  },
  {
    id: "w12-q2",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 2,
    questionText: "According to the lecture, when is a statistical model classified as a complete model?",
    options: [
      { key: "a", text: "When the number of variables equals the number of equations" },
      { key: "b", text: "When the model contains no variables" },
      { key: "c", text: "When the number of variables is always greater than the number of equations" },
      { key: "d", text: "When only categorical data are used" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "A mathematical or statistical model is classified as complete when the system has exactly as many independent equations as unknown variables."
  },
  {
    id: "w12-q3",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 3,
    questionText: "Analysis of Variance (ANOVA) is best applied when which of the following are to be compared?",
    options: [
      { key: "a", text: "Only a single observation" },
      { key: "b", text: "More than two populations or samples" },
      { key: "c", text: "Only non-numerical labels without any response variable" },
      { key: "d", text: "Only identical copies of the same observation" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "ANOVA determines whether statistically significant differences exist among the means of three or more independent groups or treatment populations."
  },
  {
    id: "w12-q4",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 4,
    questionText: "What does Pearson's correlation coefficient (r) measure?",
    options: [
      { key: "a", text: "The number of equations in a statistical model" },
      { key: "b", text: "The maximum value in a dataset" },
      { key: "c", text: "The strength of association between two variables" },
      { key: "d", text: "The sample size of an experiment" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Pearson's correlation coefficient r measures the linear correlation strength and direction between two continuous variables, ranging from -1 to +1."
  },
  {
    id: "w12-q5",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 5,
    questionText: "What is a primary objective of the AgriSens smart water management system?",
    options: [
      { key: "a", text: "Restricting irrigation control to manual operation only" },
      { key: "b", text: "Increasing irrigation water use regardless of soil condition" },
      { key: "c", text: "Removing all sensors from agricultural fields" },
      { key: "d", text: "Achieving more crop yield with less water" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "AgriSens optimizes agricultural water utilization to maximize agricultural crop yield while conserving water through precision sensor feedback."
  },
  {
    id: "w12-q6",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 6,
    questionText: "Which set correctly represents the three layers of the proposed AgriSens architecture?",
    options: [
      { key: "a", text: "Physical layer; transport layer; presentation layer" },
      { key: "b", text: "Sensing and actuating layer; processing, storage and service layer; application layer" },
      { key: "c", text: "User layer; billing layer; routing layer" },
      { key: "d", text: "Sensor layer; firewall layer; operating-system layer" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "The AgriSens architecture is organized into: (1) Sensing and Actuating layer, (2) Processing, Storage and Service layer, and (3) Application layer."
  },
  {
    id: "w12-q7",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 7,
    questionText: "Which component is included in the integrated design of an AgriSens sensor node?",
    options: [
      { key: "a", text: "Meter data management system for smart grids" },
      { key: "b", text: "Power management unit" },
      { key: "c", text: "Phasor measurement unit" },
      { key: "d", text: "Hadoop Namenode" }
    ],
    correctKeys: ["b"],
    type: "mcq",
    solution: "An AgriSens in-field sensor node integrates soil probes, microcontroller, wireless transceiver, and a Power Management Unit (solar/battery)."
  },
  {
    id: "w12-q8",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 8,
    questionText: "What is the function of the multi-user server in the AgriSens remote-server design?",
    options: [
      { key: "a", text: "It supplies electrical power to the sensor nodes" },
      { key: "b", text: "It measures soil moisture directly in the field" },
      { key: "c", text: "It sends field information to the farmer's mobile phone using SMS and executes farmer queries and control messages" },
      { key: "d", text: "It replaces all gateways with wired links" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The multi-user server dispatches alert SMS notifications to farmers' mobile devices and processes incoming SMS query and motor actuation commands."
  },
  {
    id: "w12-q9",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 9,
    questionText: "In the IoT healthcare architecture discussed in the lecture, which layer contains smartphones and tablets used as data aggregators?",
    options: [
      { key: "a", text: "Physical power layer" },
      { key: "b", text: "Sensing layer" },
      { key: "c", text: "Cloud platform" },
      { key: "d", text: "Aggregated layer" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "The Aggregated layer (or intermediary gateway tier) comprises personal user devices such as smartphones and tablets that collect biometric sensor streams."
  },
  {
    id: "w12-q10",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 10,
    questionText: "Which of the following is an example of preventive care enabled by IoT healthcare?",
    options: [
      { key: "a", text: "Fall detection for senior citizens" },
      { key: "b", text: "Disabling emergency alerts" },
      { key: "c", text: "Removing physiological sensors from patients" },
      { key: "d", text: "Storing only paper-based medical records" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Automated wearable fall detection enables timely assistance for elderly patients, mitigating complications before condition worsens."
  },
  {
    id: "w12-q11",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 11,
    questionText: "What is an advantage of continuous activity monitoring?",
    options: [
      { key: "a", text: "It requires all sensor data to be discarded immediately" },
      { key: "b", text: "It prevents any long-term observation" },
      { key: "c", text: "It enables daily observation of human behavior and repetitive activity patterns" },
      { key: "d", text: "It can operate only with cameras" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "Continuous activity monitoring enables doctors to identify longitudinal behavioral routines, sleep cycles, and anomalous motor degradation over time."
  },
  {
    id: "w12-q12",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 12,
    questionText: "Which type of data can be analyzed using the deep-learning-based approach described in the lecture?",
    options: [
      { key: "a", text: "Sensor data, images, and videos" },
      { key: "b", text: "Images only" },
      { key: "c", text: "Text labels only" },
      { key: "d", text: "Sensor data only and never images or videos" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "Deep learning models in modern IoT handle multimodal data streams, including 1D sensor time-series, 2D images, and video surveillance."
  },
  {
    id: "w12-q13",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 13,
    questionText: "Processing activity-monitoring sensor data directly on the device is referred to as which approach?",
    options: [
      { key: "a", text: "Data-aggregator selection approach" },
      { key: "b", text: "Network-only approach" },
      { key: "c", text: "Cloud replication approach" },
      { key: "d", text: "In-place approach" }
    ],
    correctKeys: ["d"],
    type: "mcq",
    solution: "Processing inertial telemetry directly on the wearable or smartphone device is referred to as the in-place processing approach."
  },
  {
    id: "w12-q14",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 14,
    questionText: "What are the three basic elements used in the smartphone-based activity-monitoring demonstration?",
    options: [
      { key: "a", text: "A soil-moisture sensor, a pump, and a paddy field" },
      { key: "b", text: "A smart meter, a PMU, and a power plant" },
      { key: "c", text: "A smartphone, a network, and a remote server" },
      { key: "d", text: "A Hadoop Namenode, Datanode, and Job Tracker" }
    ],
    correctKeys: ["c"],
    type: "mcq",
    solution: "The demonstration leverages a smartphone (sensing/logging), a communication network (cellular/Wi-Fi), and a remote server (classification and dashboard)."
  },
  {
    id: "w12-q15",
    moduleId: "week-12",
    weekLabel: "Week 12",
    questionNumber: 15,
    questionText: "Which sensor values are specifically logged in the activity-monitoring demonstration described in the lecture?",
    options: [
      { key: "a", text: "Accelerometer values" },
      { key: "b", text: "Soil-moisture values" },
      { key: "c", text: "Smart-grid voltage phasors" },
      { key: "d", text: "Water-level values" }
    ],
    correctKeys: ["a"],
    type: "mcq",
    solution: "3-axis accelerometer readings (X, Y, Z acceleration in m/s^2) are logged and classified into walking, running, sitting, or standing states."
  }
];
