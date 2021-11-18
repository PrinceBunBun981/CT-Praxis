register("command", () => {
    const particles = []
    World.particle.getParticleNames().forEach(p => particles.push(p));
    ChatLib.chat(particles.toString())
}).setName("test")