import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { site, programs, tuition, events, whyUs } from "@/lib/site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="pill">⭐ {site.slogan}</span>
            <h1>
              Nơi ươm mầm <span className="hl">những điều lớn lao</span>
            </h1>
            <p className="lead">
              Mầm non tư thục song ngữ <strong>{site.name}</strong> — môi trường học
              tập an toàn, hiện đại và tràn đầy yêu thương, nơi mỗi bé được thỏa sức
              khám phá, tự tin tỏa sáng và trưởng thành mỗi ngày.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Đăng ký tham quan</a>
              <a href="#events" className="btn btn-ghost">Xem hoạt động của bé</a>
            </div>
            <div className="hero-stats">
              <div><strong>10+</strong><span>Năm kinh nghiệm</span></div>
              <div><strong>100%</strong><span>Giáo viên tận tâm</span></div>
              <div><strong>3+</strong><span>Cơ sở vật chất hiện đại</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.jpeg" alt="HSchool" />
              <div className="hero-card-badges">
                <span>🎨 Sáng tạo</span>
                <span>🌱 Khám phá</span>
                <span>💙 Yêu thương</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="strip">
        <div className="container strip-grid">
          <div className="strip-item"><span className="strip-ico">🗣️</span><div><strong>Song ngữ</strong><small>Tiếng Anh mỗi ngày</small></div></div>
          <div className="strip-item"><span className="strip-ico">🛡️</span><div><strong>An toàn</strong><small>Camera & y tế 24/7</small></div></div>
          <div className="strip-item"><span className="strip-ico">🍱</span><div><strong>Dinh dưỡng</strong><small>Thực đơn khoa học</small></div></div>
          <div className="strip-item"><span className="strip-ico">🎭</span><div><strong>Trải nghiệm</strong><small>Sự kiện hằng tháng</small></div></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/event-outdoor.jpeg" alt="Bé vui chơi ngoài trời tại HSchool" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">Về HSchool</span>
            <h2>Mỗi ngày đến trường là một ngày vui</h2>
            <p>
              Tại HSchool, chúng tôi tin rằng <strong>“{site.slogan}”</strong> — sự
              vĩ đại bắt đầu từ những điều nhỏ bé hôm nay. Bằng phương pháp giáo dục
              lấy trẻ làm trung tâm, chúng tôi nuôi dưỡng sự tò mò, lòng tự tin và
              tình yêu thương trong mỗi bé.
            </p>
            <ul className="check-list">
              <li>Chương trình song ngữ chuẩn quốc tế, phù hợp lứa tuổi</li>
              <li>Lớp học ấm áp, sĩ số nhỏ, chăm sóc cá nhân hóa</li>
              <li>Hoạt động trải nghiệm thực tế giúp bé phát triển toàn diện</li>
              <li>Đồng hành chặt chẽ cùng phụ huynh mỗi ngày</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Hẹn lịch tham quan trường</a>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section section-soft" id="programs">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Chương trình học</span>
            <h2>Phát triển toàn diện cho bé từ 18 tháng – 6 tuổi</h2>
            <p>Lộ trình được thiết kế theo từng độ tuổi, cân bằng giữa học và chơi.</p>
          </div>
          <div className="cards-3">
            {programs.map((p) => (
              <article key={p.title} className={`prog-card${p.featured ? " prog-card--featured" : ""}`}>
                <span className="prog-ico">{p.icon}</span>
                <h3>{p.title}</h3>
                <p className="prog-age">{p.age}</p>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TUITION */}
      <section className="section" id="tuition">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Học phí</span>
            <h2>Mức học phí minh bạch, linh hoạt</h2>
            <p>Học phí đã bao gồm chương trình học, bán trú và các hoạt động trải nghiệm cơ bản.</p>
          </div>
          <div className="cards-3 tuition-grid">
            {tuition.map((t) => (
              <article key={t.title} className={`price-card${t.featured ? " price-card--featured" : ""}`}>
                {t.featured && <span className="price-flag">Phổ biến nhất</span>}
                <div className="price-head">
                  <h3>{t.title}</h3>
                  <p className="price-age">{t.age}</p>
                </div>
                <div className="price-amount">
                  <span className="price-num">{t.price}</span>
                  <span className="price-unit">đ/tháng</span>
                </div>
                <ul className="price-list">
                  {t.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a href="#contact" className={`btn btn-block ${t.featured ? "btn-primary" : "btn-ghost"}`}>
                  {t.featured ? "Đăng ký ngay" : "Nhận tư vấn"}
                </a>
              </article>
            ))}
          </div>
          <p className="tuition-note">
            * Mức phí mang tính tham khảo. Vui lòng liên hệ để nhận bảng học phí chi
            tiết và ưu đãi nhập học mới nhất.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section section-soft" id="events">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Sự kiện & Hoạt động</span>
            <h2>Một ngày trải nghiệm — Một đời kỷ niệm</h2>
            <p>Những hoạt động nổi bật giúp bé thỏa sức khám phá tại HSchool.</p>
          </div>
          <div className="cards-2">
            {events.map((ev) => (
              <article key={ev.title} className="event-card">
                <div className="event-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ev.img} alt={ev.title} />
                  <span className="event-tag">{ev.tag}</span>
                </div>
                <div className="event-body">
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (client) */}
      <Gallery />

      {/* WHY */}
      <section className="section section-soft" id="why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vì sao chọn HSchool</span>
            <h2>Điều khiến phụ huynh tin tưởng</h2>
          </div>
          <div className="cards-4">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <span className="why-ico">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="container contact-wrap">
          <div className="contact-info">
            <span className="eyebrow eyebrow-light">Đăng ký tư vấn</span>
            <h2>Cùng bé bắt đầu hành trình tại HSchool</h2>
            <p>
              Để lại thông tin, đội ngũ HSchool sẽ liên hệ tư vấn lộ trình và hẹn lịch
              tham quan trường cho gia đình mình.
            </p>
            <ul className="contact-list">
              <li><span>📞</span> Hotline: <a href={`tel:${site.hotlineTel}`}>{site.hotline}</a></li>
              <li><span>💬</span> Zalo: <a href={site.zalo} target="_blank" rel="noopener noreferrer">{site.hotline}</a></li>
              <li><span>✉️</span> Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span>📍</span> Hệ thống Mầm non song ngữ HSchool</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo.jpeg" alt="HSchool" className="footer-logo" />
            <p>
              <strong>Mầm non song ngữ HSchool</strong>
              <br />
              {site.slogan}
            </p>
          </div>
          <div className="footer-col">
            <h4>Khám phá</h4>
            <a href="#about">Giới thiệu</a>
            <a href="#programs">Chương trình</a>
            <a href="#tuition">Học phí</a>
            <a href="#events">Sự kiện</a>
            <a href="#gallery">Thư viện</a>
          </div>
          <div className="footer-col">
            <h4>Liên hệ</h4>
            <a href={`tel:${site.hotlineTel}`}>📞 {site.hotline}</a>
            <a href={site.zalo} target="_blank" rel="noopener noreferrer">💬 Zalo</a>
            <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {year} HSchool — Mầm non song ngữ. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating buttons */}
      <div className="float-group">
        <a href={site.zalo} target="_blank" rel="noopener noreferrer" className="float-btn float-zalo" aria-label="Chat Zalo">Zalo</a>
        <a href={`tel:${site.hotlineTel}`} className="float-btn float-call" aria-label="Gọi hotline">📞</a>
      </div>

      <ScrollReveal />
    </>
  );
}
