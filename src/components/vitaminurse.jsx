import { useState, useEffect } from "react";
import {
  Droplet,
  TrendingUp,
  Target,
  Users,
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  PlusIcon,
  MinusIcon,
} from "lucide-react";

export default function VitamiNurse() {
  const [activeStage, setActiveStage] = useState(0);
  const [_, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [qnt, setQnt] = useState(0);

  const increment = () => {
    setQnt((prev) => prev + 1);
  };

  const decrement = () => {
    if (qnt === 0) return;

    setQnt((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ firstName: "", lastName: "", phone: "" });
    setQnt(0);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stages = [
    {
      month: "1-2 ой",
      title: "Стартапни ишга тушириш",
      tasks: [
        "Рецептурани стандартизасия қилиш (5 тур маҳсулот)",
        "Бренд айдентика, логотип",
        "Instagram + Telegram канал",
        "Хом-ашё, идишлар, жиҳозлар сотиб олиш",
        "3 фитнес клубга синов тариқасида кириш",
        'Доимий шиша таркиби ва "Shot of the Day" концепцияси',
      ],
      result: "Кунлик сотув 50–80 шотга етиши",
      color: "#ff6b6b",
    },
    {
      month: "3-4 ой",
      title: "Маркетинг ва шароитни кенгайтириш",
      tasks: [
        "Fitness клублар билан 5 та шерикчилик",
        '"Office Shot Box" тармоқлар учун чиқариш',
        "Bloggers collaboration",
        "Anti-Stress ва Immunity кампаниялари",
        '"3 Daily Detox Set" линиясини қўшиш',
      ],
      result: "Ойлик даромад 20–25 млн сўмга чиқиши",
      color: "#ffa500",
    },
    {
      month: "5-6 ой",
      title: "B2B бозорга кириш",
      tasks: [
        "IT Park, банклар, университетларга абонемент таклиф қилиш",
        "Корпоратив 100-shot пакетлар",
        "Доимий доставка хизмати",
        "Детокс ва Energy Day корпоратив сетлари",
      ],
      result: "Абонементлардан ойига қўшимча 10–15 млн сўм",
      color: "#4ecdc4",
    },
    {
      month: "7-9 ой",
      title: "Маҳсулот турларини кўпайтириш",
      tasks: [
        "Beauty Collagen Drink",
        "Athlete Pro Drink (спортчилар учун)",
        "VitaminKids серияси (болалар учун)",
        "Маҳсулотлар учун QR-кодли контент",
      ],
      result: "Мижоз аудиторияси 30–40%га кенгаяди",
      color: "#a29bfe",
    },
    {
      month: "10-12 ой",
      title: "Франшиза ва мини-цех",
      tasks: [
        "Самарқанд, Наманган, Андижон учун франшиза модели",
        "Хом буюмларини автоматлаштириш",
        "Мини ишлаб чиқариш цехи (санитария стандарти)",
        'Бозорда позиция: "Uzbek Premium Functional Drinks"',
      ],
      result: "Бренднинг республикада танилиши, 3 та франшиза сотилиши",
      color: "#00b894",
    },
  ];

  const kpis = [
    { label: "Сотув", from: "50", to: "150 шот/кун", period: "12 ой" },
    { label: "Абонемент", from: "0", to: "20 компания", period: "6–12 ой" },
    { label: "Маҳсулот турлари", from: "5", to: "12 тур", period: "1 йил" },
    { label: "География", from: "1 шаҳар", to: "4 шаҳар", period: "12 ой" },
    { label: "Чакана нуқта", from: "0", to: "2 мини-бар", period: "12 ой" },
    { label: "Франшиза", from: "0", to: "3 франшиза", period: "12 ой" },
  ];

  const risks = [
    {
      risk: "Ингредиент нархи ўзгариши",
      solution: "Мавсумда оммавий сотиб олиш",
    },
    {
      risk: "Мижозлар доимийлигини сақлаш",
      solution: 'Лойаллик дастури — "5+1 Free Shot"',
    },
    {
      risk: "Катта рақобат",
      solution: '"Functional Medical Drinks" сегментида позиция',
    },
    { risk: "Сифат стандарти", solution: "HACCP бўйича иш жараёнлар" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Montserrat', -apple-system, sans-serif",
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <div
          className="floating"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="floating"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
            animationDelay: "1s",
          }}
        />

        <div className="hero">
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: "1200px",
            }}
          >
            <div
              className="pulse"
              style={{
                display: "inline-block",
                background: "rgba(255, 255, 255, 0.15)",
                padding: "12px 30px",
                borderRadius: "50px",
                marginBottom: "30px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Sparkles
                size={20}
                style={{
                  display: "inline",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                FUNCTIONAL DRINKS
              </span>
            </div>

            <h1
              className="slide-in"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 8vw, 120px)",
                fontWeight: "900",
                lineHeight: "1.1",
                marginBottom: "30px",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span className="gradient-text">VitamiNurse</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(20px, 3vw, 32px)",
                marginBottom: "50px",
                fontWeight: "300",
                lineHeight: "1.6",
                maxWidth: "800px",
                margin: "0 auto 50px",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              Соғликга витаминли ёрдам берувчи ичимлик
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className="sparkle glow"
                style={{
                  background:
                    "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
                  border: "none",
                  padding: "18px 45px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                Лойиҳани кўриш
                <ArrowRight size={20} />
              </button>
              <button
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  padding: "16px 40px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
              >
                Боғланиш
              </button>
            </div>
          </div>
          <img src="/bg.png" className="bg-image" />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            animation: "floating 2s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "50px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "10px",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "3px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scrollIndicator 2s infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0% { top: 8px; opacity: 1; }
          100% { top: 24px; opacity: 0; }
        }
      `}</style>

      {/* Mission & Vision */}
      <div
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "80px",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            Mission & Vision
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            <div className="glass-card" style={{ padding: "50px" }}>
              <Target
                size={48}
                style={{ marginBottom: "25px", opacity: 0.9 }}
              />
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#ffeaa7",
                }}
              >
                Mission
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  fontWeight: "300",
                  opacity: 0.95,
                }}
              >
                Аҳолига табиий, функционал, шифобахш витаминли ичимликлар орқали
                соғлом ҳаёт тарзини оммалаштириш
              </p>
            </div>

            <div className="glass-card" style={{ padding: "50px" }}>
              <Award size={48} style={{ marginBottom: "25px", opacity: 0.9 }} />
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#a29bfe",
                }}
              >
                Vision
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  fontWeight: "300",
                  opacity: 0.95,
                }}
              >
                1 йил ичида VitamiNurse'ни Ўзбекистондаги №1 функционал ичимлик
                брендига айлантириш, 3 та йирик фитнес тармоғи ва 20+ компания
                билан абонемент асосида келишувга эришиш
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1-Year Roadmap */}
      <div
        style={{ padding: "100px 20px", background: "rgba(255,255,255,0.02)" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "30px",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            1 йиллик босқичма-босқич ривож
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              opacity: 0.9,
              marginBottom: "80px",
              fontWeight: "300",
            }}
          >
            Стартаптан йирик бренгача 5 босқичда
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`glass-card stage-card ${
                  activeStage === index ? "active" : ""
                }`}
                onClick={() => setActiveStage(index)}
                style={{
                  padding: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: stage.color,
                  }}
                />

                <div
                  className="number-animate"
                  style={{
                    fontSize: "72px",
                    fontWeight: "900",
                    opacity: 0.15,
                    position: "absolute",
                    top: "20px",
                    right: "30px",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div
                  style={{
                    background: stage.color,
                    display: "inline-block",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "700",
                    marginBottom: "20px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {stage.month}
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "25px",
                    lineHeight: "1.3",
                  }}
                >
                  {stage.title}
                </h3>

                <div style={{ marginBottom: "25px" }}>
                  {stage.tasks.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <CheckCircle
                        size={18}
                        style={{
                          flexShrink: 0,
                          marginTop: "2px",
                          color: stage.color,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.6",
                          opacity: 0.9,
                          fontWeight: "300",
                        }}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "20px",
                    borderRadius: "16px",
                    marginTop: "25px",
                    border: `1px solid ${stage.color}50`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: stage.color,
                      letterSpacing: "1px",
                    }}
                  >
                    НАТИЖА
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                    }}
                  >
                    {stage.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "80px",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            Молиявий режа
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            <div
              className="glass-card glow"
              style={{
                padding: "50px",
                textAlign: "center",
              }}
            >
              <TrendingUp
                size={48}
                style={{ marginBottom: "20px", color: "#00b894" }}
              />
              <div
                style={{
                  fontSize: "18px",
                  opacity: 0.8,
                  marginBottom: "15px",
                  fontWeight: "300",
                }}
              >
                Жами даромад
              </div>
              <div
                className="gradient-text"
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                431
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                млн сўм
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: "50px",
                textAlign: "center",
              }}
            >
              <Droplet
                size={48}
                style={{ marginBottom: "20px", color: "#ff6b6b" }}
              />
              <div
                style={{
                  fontSize: "18px",
                  opacity: 0.8,
                  marginBottom: "15px",
                  fontWeight: "300",
                }}
              >
                Жами харажат
              </div>
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                120
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                млн сўм
              </div>
            </div>

            <div
              className="glass-card glow"
              style={{
                padding: "50px",
                textAlign: "center",
              }}
            >
              <Sparkles
                size={48}
                style={{ marginBottom: "20px", color: "#ffeaa7" }}
              />
              <div
                style={{
                  fontSize: "18px",
                  opacity: 0.8,
                  marginBottom: "15px",
                  fontWeight: "300",
                }}
              >
                Ялпи фойда
              </div>
              <div
                className="gradient-text"
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                311
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                млн сўм
              </div>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "60px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "30px",
                color: "#ffeaa7",
              }}
            >
              Лойиҳанинг ўзини ўзи қоплаши (ROI)
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "40px",
                marginTop: "40px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    opacity: 0.8,
                    marginBottom: "12px",
                  }}
                >
                  Бошланғич инвестиция
                </div>
                <div style={{ fontSize: "36px", fontWeight: "800" }}>
                  17.4 млн
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    opacity: 0.8,
                    marginBottom: "12px",
                  }}
                >
                  Ойлик соф фойда
                </div>
                <div style={{ fontSize: "36px", fontWeight: "800" }}>
                  10-15 млн
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    opacity: 0.8,
                    marginBottom: "12px",
                  }}
                >
                  Қоплаш муддати
                </div>
                <div style={{ fontSize: "36px", fontWeight: "800" }}>
                  1.5-2 ой
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "50px",
                fontSize: "24px",
                fontWeight: "700",
                color: "#00b894",
              }}
            >
              ROI: 180–250% 🚀
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div
        style={{ padding: "100px 20px", background: "rgba(255,255,255,0.02)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "30px",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            Стратегик KPI
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              opacity: 0.9,
              marginBottom: "80px",
              fontWeight: "300",
            }}
          >
            1 йиллик ўлчов кўрсаткичлари
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "25px",
                    color: "#ffeaa7",
                  }}
                >
                  {kpi.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "700",
                      opacity: 0.6,
                    }}
                  >
                    {kpi.from}
                  </div>
                  <ArrowRight size={28} style={{ color: "#00b894" }} />
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "900",
                      color: "#00b894",
                    }}
                  >
                    {kpi.to}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.7,
                    fontWeight: "300",
                  }}
                >
                  {kpi.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risks & Solutions */}
      <div style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "80px",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            Рискиллар ва ечимлар
          </h2>

          <div
            className="glass-card-list"
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            {risks.map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  gap: "30px",
                  alignItems: "center",
                }}
              >
                <div className="shield-container">
                  <Shield
                    size={24}
                    style={{
                      marginBottom: "15px",
                      color: "#ff6b6b",
                      opacity: 0.8,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.risk}
                  </div>
                </div>
                <ArrowRight
                  className="arrow-icon"
                  size={32}
                  style={{ color: "#4ecdc4", flexShrink: 0 }}
                />
                <div className="shield-container">
                  <CheckCircle
                    size={24}
                    style={{ marginBottom: "15px", color: "#00b894" }}
                  />
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      color: "#00b894",
                    }}
                  >
                    {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div
        style={{
          padding: "120px 20px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="floating"
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,234,167,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="pulse"
            style={{
              display: "inline-block",
              background: "rgba(0, 184, 148, 0.2)",
              padding: "12px 30px",
              borderRadius: "50px",
              marginBottom: "30px",
              border: "1px solid rgba(0, 184, 148, 0.4)",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            1 ЙИЛДАН КЕЙИН
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "900",
              marginBottom: "40px",
              lineHeight: "1.2",
            }}
          >
            VitamiNurse қандай бўлади?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            {[
              {
                icon: <Award size={36} />,
                text: "Тошкентдаги №1 функционал ичимлик бренди",
              },
              { icon: <Users size={36} />, text: "20+ компания абонементи" },
              { icon: <TrendingUp size={36} />, text: "150 шот/кун кўрсаткич" },
              { icon: <Target size={36} />, text: "3 та франшиза" },
              { icon: <Sparkles size={36} />, text: "400–500 млн сўм даромад" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "35px 25px",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "20px", opacity: 0.9 }}>
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: "300",
              fontStyle: "italic",
              marginTop: "60px",
              opacity: 0.95,
              lineHeight: "1.5",
            }}
          >
            "Соғлом ҳаётни енгил ва мазали қилиш"
          </div>

          <button
            className="sparkle glow"
            style={{
              background: "linear-gradient(135deg, #00b894 0%, #00d2a0 100%)",
              border: "none",
              padding: "22px 60px",
              borderRadius: "50px",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "60px",
              display: "inline-flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            Бизга қўшилинг
            <Sparkles size={24} />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div
        style={{
          padding: "100px 20px",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}
        >
          <img src="/bg.png" className="form-bg" />

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "20px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Бизга мурожаат қилинг
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              opacity: 0.8,
              marginBottom: "60px",
              fontWeight: "300",
              position: "relative",
              zIndex: 2,
            }}
          >
            Маълумотларингизни қолдиринг, биз сиз билан боғланамиз
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 40,
              marginBottom: 10,
            }}
            className="qnt-container"
          >
            <h3>Миқдорни киритинг</h3>
            <div style={{ display: "flex", padding: 10, gap: 10 }}>
              <button className="quentity-btn" onClick={decrement}>
                <MinusIcon />
              </button>
              <input
                value={qnt}
                style={{
                  width: 70,
                  borderRadius: 10,
                  outline: "none",
                  textAlign: "center",
                  fontSize: 18,
                }}
              />
              <button className="quentity-btn" onClick={increment}>
                <PlusIcon />
              </button>
            </div>
          </div>

          {showSuccess && (
            <div
              className="slide-in"
              style={{
                background: "linear-gradient(135deg, #00b894 0%, #00d2a0 100%)",
                padding: "25px 40px",
                borderRadius: "16px",
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "20px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                boxShadow: "0 10px 40px rgba(0, 184, 148, 0.3)",
              }}
            >
              <CheckCircle size={28} />
              Аризангiz қабул қилинди!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="glass-card"
            style={{
              padding: "50px",
              borderRadius: "24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  opacity: 0.9,
                }}
              >
                Исм
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onFocus={(e) => {
                  e.target.style.border = "2px solid #00b894";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "2px solid rgba(255, 255, 255, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  opacity: 0.9,
                }}
              >
                Фамилия
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onFocus={(e) => {
                  e.target.style.border = "2px solid #00b894";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "2px solid rgba(255, 255, 255, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              />
            </div>

            <div style={{ marginBottom: "40px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  opacity: 0.9,
                }}
              >
                Телефон рақам
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+998 xx xxx xx xx"
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onFocus={(e) => {
                  e.target.style.border = "2px solid #00b894";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "2px solid rgba(255, 255, 255, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              />
            </div>

            <button
              type="submit"
              className="sparkle glow"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #00b894 0%, #00d2a0 100%)",
                border: "none",
                padding: "20px",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              Юбориш
              <ArrowRight size={22} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          fontSize: "14px",
          opacity: 0.8,
        }}
      >
        <p>© 2025 VitamiNurse. Барча ҳуқуқлар ҳимояланган.</p>
        <p style={{ marginTop: "10px", fontWeight: "300" }}>
          Соғлом ҳаёт — енгил ва мазали!
        </p>
      </div>
    </div>
  );
}
