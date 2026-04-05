export const articles = [
    {
        title: "The iMac G3 Explosive Repair",
        tags: ["repair", "soldering", "computer"],
        imgSrc: "images/g3-sm.png",
        imgAlt: "iMac G3 playing DOOM",
        paragraphs: [
            `This iMac G3 was something I bought on a whim one day. I found it on FaceBook 
            Marketplace for $10, which was an opportunity I absolutely could not pass up. Upon 
            picking it up, I didn't think it would be much of a project, after all it worked 
            perfectly fine.`,
            `Imagine my surprise when about 30 minutes after I turned it on, the screen went
            totally blank. I figured the power supply may have overheated, it is nearly 30
            years old after all. I gave it an hour to cool off, which unfortunately had no 
            effect. So, of course, I took it apart. This was no easy task, since the plastic
            had become brittle. One thing I wanted to do while it was deconstructed was to
            attempt a method of de-yellowing the plastic. It worked to an extent, but still
            had some visible yellowing. While I had it apart, I tried everything, assuming 
            the BGA solder on the CPU was cracking, I tried a heat gun. I reflowed every bit
            of solder on the power board, too. No effect, still. That was, until I found a 
            resistor that was cracked right in half.`,
            `Well, looking at the board I realized that came straight from the power supply.
            There's my issue. I replaced it with a 100 ohm resistor I had on hand, and upon
            powering the unit on, I saw a capacitor start glowing and, before I could turn
            it off, it blew up and sent sparks into my very flammable carpet. Luckily, no 
            damage was done to my house. While I was distracted, however, something magical
            happened. The display was green because the video connector was loose, but it 
            worked! It was a miracle, honestly. I have no clue what that capacitor did, but 
            clearly it wasn't vital to the system function.`,
            `Now it works great, I installed MacOS 8.1 on it, as it originally shipped with.
            I have been able to do so many fun things on it, like checking out some old 
            shareware games. It's a fairly neat machine, and I am glad I'm able to own one.
            It seems to have some issues with the CRT display still, but I'm no expert
            in the CRT world, and I would rather not deal with high voltage electronics any 
            time soon, so I'll have to live with it.`
        ],
        adventureId: 0
    },
    {
        title: "The Apple PowerMac G5 and The Red Light of Death",
        tags: ["repair", "linux", "computer"],
        imgSrc: "images/g5-sm.png",
        imgAlt: "PowerMac G5",
        paragraphs: [
            `Imagine a computer that has a sleek design, robust features, and can run like
            the wind. That's what the PowerMac G5 was intended to envelop as a workstation.
            Unfortunately, it would seem that this one was not fit for work when I
            recieved it. It turned on and operated as one would expect, but upon my
            attempt to compile code on it, the system became unresponsive and a red light
            turned on while the fans ramped up to fighter jet levels of sound.`,
            `Turns out, the CPUs (Yes, two of them!) had aging thermal paste that was no
            longer doing its job, and one of them had overheated itself. So, I had to wait
            a couple of weeks for a new CPU card to come in the mail. Upon its arrival, I 
            used some new thermal paste to get these CPUs cooled properly. I popped the
            CPUs into the the motherboard, and got it to boot up again!`,
            `While this behemoth of a computer was the stuff of legend in its time, the
            hard truth is you'd be hard pressed to find any new software that would run
            on it. I went ahead and installed Linux on it, and though it may not seem like
            it, it still has some use today. I could write papers, play some older games,
            and even send an email or two. Though it has aged significantly, it still
            stands out as a computer that was revolutionary in its time, and yet has
            echoes in Apple's design today.`
        ],
        adventureId: 1
    },
    {
        title: "The IBM Thinkpad 365XD: A New Dilemma?",
        tags: ["computer", "windows", "FM Synthesis"],
        imgSrc: "images/tp-sm.png",
        imgAlt: "ThinkPad 365XD",
        paragraphs: [
            `Unlike some of my other projects, this laptop is more of a challenge to get
            properly working. It has no network card installed, a painful passive matrix
            display that just hurts your eyes, and by no means does it support USB. That's
            because this laptop was created in 1996, and sports a cool 40MB of RAM and 
            a 100mhz Pentium processor. I already knew my main challenge here would be 
            data transfer.`,
            `I actually ordered a serial port interface for the header that existed on my
            PC specifically to send things to this laptop. The issue is that if the baud
            rate is too high, packets are lost. It took 30 minutes to send a 4mb image.
            The cool part, though, is that this laptop can be used as a terminal to my 
            Linux PC. Not that I would recommend that experience, though.`,
            `I tried burning a CD-RW to install Windows NT 4 onto this thing, which gave
            me an extremely hard time. I guess its drive doesn't like the new and
            innovative technology of a rewritable CD. So, I went to the store and grabbed
            some CD-Rs. With those, I successfully installed Windows NT 4, and I was able
            to install all the drivers.. except one. See, the IRQ interrupts are not what
            IBM's manual would have you believe for the SoundBlaster compatible chip in
            there.`,
            `All that being said, I actually enjoy it. Something about that FM-synthesis
            audio just feels so exciting and modern, despite being 30 years old.`
        ],
        adventureID: 2
    }
];