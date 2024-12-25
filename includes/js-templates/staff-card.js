class StaffCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const name = this.getAttribute('name') || 'Unknown';
      const role = this.getAttribute('role') || 'Role not specified';
      const bio = this.getAttribute('bio') || 'No biography provided.';
      const image = this.getAttribute('image') || 'https://via.placeholder.com/150';
  
      this.shadowRoot.innerHTML = `
        <style>
          .staff-card {
            background: linear-gradient(145deg, #1b1b1b, #0a0a0a);
            border: 1px solid #00ffcc;
            border-radius: 10px;
            box-shadow: 0px 0px 15px 2px #00ffcc;
            padding: 20px;
            margin-left: 50px;
            margin-right: 50px;
            margin-top: 30px;
            margin-bottom: 30px;
            width: 200px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .staff-card:hover {
            transform: scale(1.05);
            cursor: pointer;
            box-shadow: 0px 0px 25px 5px #00ffcc;
          }
          .staff-card img {
            border-radius: 50%;
            border: 2px solid #00ffcc;
            width: 120px;
            height: 120px;
            margin-bottom: 10px;
          }
          .staff-card h2 {
            font-size: 1.2rem;
            margin: 10px 0 5px;
            color: #fff;
          }
          .staff-card h3 {
            font-size: 1rem;
            margin: 5px 0 10px;
            color: #aaa;
          }
          .staff-card p {
            font-size: 0.9rem;
            line-height: 1.4;
            color: #ddd;
          }
        </style>
        <div class="staff-card">
          <img src="${image}" alt="${name}">
          <h2>${name}</h2>
          <h3>${role}</h3>
          <p>${bio}</p>
        </div>
      `;
    }
  }
  
  customElements.define('staff-card', StaffCard);