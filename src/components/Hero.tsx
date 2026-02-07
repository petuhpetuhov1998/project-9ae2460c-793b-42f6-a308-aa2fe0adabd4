import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat, Shield, Maximize, Sparkles, Heart, Play } from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';
import logo from '@/assets/logo.png';

// Floating particles component
const FloatingParticle = ({ delay, duration, size, left, top }: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-primary/30 to-sage/20 blur-sm"
    style={{ width: size, height: size, left, top }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const advantages = [
    { 
      icon: ChefHat, 
      title: 'Домашняя кухня', 
      desc: '5-разовое питание',
      gradient: 'from-amber-accent via-primary to-amber-accent',
      delay: 0.4
    },
    { 
      icon: Shield, 
      title: 'Безопасность', 
      desc: 'Видеонаблюдение 24/7',
      gradient: 'from-sage via-primary to-sage',
      delay: 0.5
    },
    { 
      icon: Maximize, 
      title: '200 м²', 
      desc: 'Просторное помещение',
      gradient: 'from-primary via-sage to-primary',
      delay: 0.6
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Main gradient orbs */}
        <motion.div 
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[-30%] left-[-15%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--sage) / 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--amber-accent) / 0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        <FloatingParticle delay={0} duration={8} size={60} left="10%" top="20%" />
        <FloatingParticle delay={1} duration={10} size={40} left="80%" top="30%" />
        <FloatingParticle delay={2} duration={12} size={80} left="60%" top="70%" />
        <FloatingParticle delay={0.5} duration={9} size={50} left="25%" top="60%" />
        <FloatingParticle delay={1.5} duration={11} size={35} left="75%" top="80%" />
        <FloatingParticle delay={2.5} duration={7} size={45} left="15%" top="85%" />
      </motion.div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div 
        className="container mx-auto relative z-10 px-4 pt-28 pb-20"
        style={{ opacity }}
      >
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left column - Text content */}
          <div className="space-y-8">
            
            {/* Logo and brand with glassmorphism */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-5 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl"
            >
              <motion.img 
                src={logo} 
                alt="Мистер Мишка" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <p className="font-monly font-bold text-foreground text-2xl md:text-3xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
                  Мистер Мишка
                </p>
                <p className="text-base md:text-lg text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Частный детский сад
                </p>
              </div>
            </motion.div>

            {/* Heading with animated gradient */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="font-monly text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
                <span className="block">Место, где</span>
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-primary via-sage to-amber-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                    детство
                  </span>
                  <motion.span 
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-sage/20 to-amber-accent/20 rounded-xl blur-xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
                <span className="block">становится</span>
                <span className="block">
                  <span className="relative">
                    волшебным
                    <motion.svg 
                      className="absolute -bottom-2 left-0 w-full" 
                      height="12" 
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <motion.path
                        d="M0 8 Q50 0 100 8 T200 8"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      />
                    </motion.svg>
                  </span>
                </span>
              </h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Создаём тёплую атмосферу для развития и счастья вашего ребёнка. 
                <span className="text-foreground font-medium"> Индивидуальный подход</span> к каждому малышу от 1.5 до 6 лет.
              </motion.p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <LiquidButton 
                  size="xxl"
                  className="text-xl md:text-2xl px-10 py-5 shadow-2xl shadow-primary/30"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  ЭКСКУРСИЯ
                </LiquidButton>
              </motion.div>
              
              <motion.button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/20 text-foreground font-medium hover:bg-white/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-sage/30 transition-colors">
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                </span>
                Узнать подробнее
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {['👶', '👧', '👦', '🧒', '👼'].map((emoji, i) => (
                    <motion.div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-sage/90 border-2 border-white flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    >
                      <span className="text-sm">{emoji}</span>
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-monly font-bold text-foreground">
                    <AnimatedCounter value={150} suffix="+" />
                  </p>
                  <p className="text-xs text-muted-foreground">выпускников</p>
                </div>
              </div>
              
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              
              <div>
                <p className="text-2xl font-monly font-bold text-foreground flex items-center gap-1">
                  <AnimatedCounter value={7} />
                  <span className="text-primary">лет</span>
                </p>
                <p className="text-xs text-muted-foreground">заботы о детях</p>
              </div>
              
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block" />
              
              <div className="hidden sm:block">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + star * 0.1 }}
                    >
                      <Heart className="w-4 h-4 text-pink-accent fill-pink-accent" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">любовь родителей</p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            
            {/* Decorative ring */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-primary/10" />
            </motion.div>
            
            {/* Main image container */}
            <motion.div 
              className="relative max-w-[340px] md:max-w-[400px]"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              
              {/* Multi-layer glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-sage/30 to-amber-accent/40 rounded-[2.5rem] blur-3xl opacity-60" />
              <div className="absolute -inset-3 bg-gradient-to-tr from-white/80 to-white/40 rounded-[2.5rem] blur-xl" />
              
              {/* Image frame with glass effect */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
                <motion.img 
                  src={heroChild} 
                  alt="Счастливый ребенок в детском саду" 
                  className="w-full aspect-[4/5] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-white/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sage/10 mix-blend-overlay" />
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '200%', opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                />
              </div>

              {/* Floating age badge - top right */}
              <motion.div 
                className="absolute -top-6 -right-6 z-20"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl border border-white/50">
                  <p className="text-xl font-monly font-bold bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">1.5 — 6</p>
                  <p className="text-xs text-muted-foreground">лет</p>
                </div>
              </motion.div>

              {/* Floating group badge - bottom left */}
              <motion.div 
                className="absolute -bottom-6 -left-6 z-20"
                initial={{ scale: 0, rotate: 20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="bg-gradient-to-br from-primary via-primary to-sage rounded-2xl px-5 py-4 shadow-2xl">
                  <p className="text-xl font-monly font-bold text-white">8-12</p>
                  <p className="text-xs text-white/80">детей в группе</p>
                </div>
              </motion.div>

              {/* Floating heart badge - top left */}
              <motion.div 
                className="absolute top-8 -left-8 z-20"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-7 h-7 text-pink-accent fill-pink-accent" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Advantages section */}
        <motion.div 
          className="mt-24 grid sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {advantages.map((adv, index) => (
            <motion.div 
              key={adv.title}
              className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-7 shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: adv.delay, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${adv.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Icon with gradient */}
              <motion.div 
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center mb-5 shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <adv.icon className="w-8 h-8 text-white" />
                
                {/* Icon glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${adv.gradient} blur-xl opacity-50 -z-10`} />
              </motion.div>
              
              {/* Content */}
              <h3 className="font-monly font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {adv.title}
              </h3>
              <p className="text-muted-foreground">{adv.desc}</p>
              
              {/* Decorative corner gradient */}
              <div className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${adv.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-15 group-hover:scale-150 transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
