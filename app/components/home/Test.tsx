'use client';
import React from 'react';
import { useViewportScroll, useTransform, motion, AnimatePresence } from 'framer-motion';

const DUMMY_CARDS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Card Title ${i + 1}`,
  image: `https://via.placeholder.com/300x180?text=Image+${i + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}));

export default function Test() {
  const { scrollYProgress } = useViewportScroll();

  // Board rotation: 30° → 0° between 0–0.25 scroll
  const boardRotateX = useTransform(scrollYProgress, [0, 0.25], [30, 0]);
  // Sphere lift: 0 → -200px (Y axis) between 0–0.25 scroll
  const sphereY = useTransform(scrollYProgress, [0, 0.25], [0, -200]);

  // Section opacity and Y-offset flags
  const firstCardsOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const secondSectionProgress = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const secondSectionY = useTransform(scrollYProgress, [0.5, 0.55], [50, 0]);
  const thirdSectionOpacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.div className="hero-section">
        <motion.div className="board" style={{ rotateX: boardRotateX }} />
        <motion.div className="sphere" style={{ y: sphereY }} />

        <motion.div className="cards-grid" style={{ opacity: firstCardsOpacity }}>
          {DUMMY_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              className="card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <img src={card.image} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Second Section: slides down from above */}
      <motion.section
        className="section"
        style={{ opacity: secondSectionProgress }}
      >
        <h2>Everything in one place</h2>
        <p>Fully-featured email client, CRM, task manager and more integrated with your favorite tools.</p>
        <div className="cards-row">
          {DUMMY_CARDS.map((card, i) => (
            <motion.div
              className="card-small"
              key={`sec2-${card.id}`}
              style={{
                opacity: secondSectionProgress,
                y: secondSectionY,
              }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <img src={card.image} alt={card.title} />
              <div>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Third Section */}
      <motion.section className="section" style={{ opacity: thirdSectionOpacity }}>
        <h2>Automatically Updated</h2>
        <p>Everything enriched with real-time data, auto-updated on new activity.</p>
        <div className="cards-row">
          {DUMMY_CARDS.slice(0, 3).map(card => (
            <div className="card-small" key={`sec3-${card.id}`}>  
              <img src={card.image} alt={card.title} />
              <div>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <style jsx global>{`
        .page-container {
          height: 400vh;
          background: #090a0f;
          color: #fff;
          overflow-x: hidden;
        }
        .hero-section {
          position: sticky;
          top: 0;
          height: 100vh;
          perspective: 800px;
        }
        .board {
          width: 600px;
          height: 400px;
          background: #111;
          margin: auto;
          transform-origin: top center;
        }
        .sphere {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff, #7a5f3d);
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .cards-grid {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 640px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          transform: translate(-50%, -30%);
        }
        .card {
          background: #1a1c22;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
        }
        .card img {
          width: 100%;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .section {
          height: 100vh;
          padding: 4rem 2rem;
          background: #090a0f;
        }
        .cards-row {
          display: flex;
          gap: 16px;
          margin-top: 2rem;
        }
        .card-small {
          flex: 1;
          background: #1a1c22;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .card-small img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }
        .card-small > div {
          padding: 12px;
        }
      `}</style>
    </div>
  );
}