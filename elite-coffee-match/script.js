const form = document.querySelector(".apply-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.textContent = "已收到報名";
  button.disabled = true;
  form.querySelector(".form-note").textContent = "示範表單已送出。正式上線時可以改接 Google Form、Tally、Airtable 或 CRM。";
});

document.querySelectorAll(".scratch-card").forEach((card) => {
  const canvas = card.querySelector(".scratch-layer");
  const button = card.querySelector(".scratch-reveal");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  let drawing = false;
  let last = null;
  let revealed = false;

  const paint = () => {
    if (revealed) return;
    const rect = card.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = card.dataset.color;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,.72)";
    ctx.font = '800 12px "Noto Sans TC", system-ui, sans-serif';
    ctx.letterSpacing = "1px";
    ctx.fillText(card.dataset.kicker, 30, 44);

    ctx.fillStyle = "#fff";
    ctx.font = '900 32px "Noto Sans TC", system-ui, sans-serif';
    ctx.fillText(card.dataset.lineOne, 30, 148);
    ctx.fillText(card.dataset.lineTwo, 30, 194);

    ctx.fillStyle = "rgba(255,255,255,.78)";
    ctx.font = '800 14px "Noto Sans TC", system-ui, sans-serif';
    ctx.fillText("用手指或滑鼠刮開", 30, rect.height - 34);

    ctx.strokeStyle = "rgba(255,255,255,.26)";
    ctx.lineWidth = 1;
    for (let x = -rect.height; x < rect.width; x += 22) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + rect.height, rect.height);
      ctx.stroke();
    }
  };

  const point = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const scratch = (from, to) => {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 44;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const reveal = () => {
    revealed = true;
    card.classList.add("is-revealed");
  };

  const check = () => {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    let sampled = 0;
    for (let i = 3; i < data.length; i += 64) {
      sampled += 1;
      if (data[i] < 40) cleared += 1;
    }
    if (cleared / sampled > 0.42) reveal();
  };

  canvas.addEventListener("pointerdown", (event) => {
    drawing = true;
    last = point(event);
    canvas.setPointerCapture(event.pointerId);
    scratch(last, last);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const next = point(event);
    scratch(last, next);
    last = next;
  });

  const stop = () => {
    if (!drawing) return;
    drawing = false;
    last = null;
    check();
  };

  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  button.addEventListener("click", reveal);
  new ResizeObserver(paint).observe(card);
  paint();
});
