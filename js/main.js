
        const container = document.getElementById("skills-container");
        const skills = Array.from(document.querySelectorAll(".skill"));

        // Initialize skill positions and velocities
        skills.forEach(skill => {
          const rect = skill.getBoundingClientRect();
          skill.width = rect.width;
          skill.height = rect.height;

          skill.x = Math.random() * (container.clientWidth - skill.width);
          skill.y = Math.random() * (container.clientHeight - skill.height);

          skill.vx = (Math.random() - 0.5) * 0.3; // slow horizontal drift
          skill.vy = (Math.random() - 0.5) * 0.3; // slow vertical drift

          skill.isDragging = false;
          skill.style.transform = `translate(${skill.x}px, ${skill.y}px)`;
        });

        // Dragging support
        skills.forEach(skill => {
          let offsetX = 0, offsetY = 0;

          const startDrag = (clientX, clientY) => {
            skill.isDragging = true;
            offsetX = clientX - skill.x;
            offsetY = clientY - skill.y;
          };

          const dragMove = (clientX, clientY) => {
            if (!skill.isDragging) return;
            skill.x = clientX - offsetX;
            skill.y = clientY - offsetY;

            skill.x = Math.max(0, Math.min(container.clientWidth - skill.width, skill.x));
            skill.y = Math.max(0, Math.min(container.clientHeight - skill.height, skill.y));
          };

          const endDrag = () => skill.isDragging = false;

          // Mouse events
          skill.addEventListener("mousedown", e => startDrag(e.clientX, e.clientY));
          document.addEventListener("mousemove", e => dragMove(e.clientX, e.clientY));
          document.addEventListener("mouseup", endDrag);

          // Touch events
          skill.addEventListener("touchstart", e => {
            const touch = e.touches[0];
            startDrag(touch.clientX, touch.clientY);
          });
          document.addEventListener("touchmove", e => {
            const touch = e.touches[0];
            dragMove(touch.clientX, touch.clientY);
          }, { passive: false });
          document.addEventListener("touchend", endDrag);
        });

        // Collision detection
        function preventOverlap(skill) {
          skills.forEach(other => {
            if (skill === other) return;

            const dx = skill.x - other.x;
            const dy = skill.y - other.y;
            const minDistX = (skill.width + other.width) / 2;
            const minDistY = (skill.height + other.height) / 2;

            if (Math.abs(dx) < minDistX && Math.abs(dy) < minDistY) {
              // Push skills apart
              if (dx !== 0) skill.x += dx > 0 ? 1 : -1;
              if (dy !== 0) skill.y += dy > 0 ? 1 : -1;
            }
          });
        }

        // Animation loop
        function animate() {
          skills.forEach(skill => {
            if (!skill.isDragging) {
              // slow drift
              skill.x += skill.vx;
              skill.y += skill.vy;

              // bounce off walls
              if (skill.x < 0 || skill.x > container.clientWidth - skill.width) skill.vx *= -1;
              if (skill.y < 0 || skill.y > container.clientHeight - skill.height) skill.vy *= -1;

              // keep inside container
              skill.x = Math.max(0, Math.min(container.clientWidth - skill.width, skill.x));
              skill.y = Math.max(0, Math.min(container.clientHeight - skill.height, skill.y));

              // prevent overlapping
              preventOverlap(skill);
            }

            skill.style.transform = `translate(${skill.x}px, ${skill.y}px)`;
          });

          requestAnimationFrame(animate);
        }

        animate();


      const { createApp } = Vue;

      createApp({
        data() {
          return {
            activeFilter: "All",
            filters: projectFilters,
            projects: projects
          }
        },

        computed: {
          filteredProjects() {
            if (this.activeFilter === "All") {
              return this.projects;
            }
            return this.projects.filter(p => p.category === this.activeFilter);
          },
          // only show the first three projects on homepage
          displayedProjects() {
            // treat highest id as most recent and show up to three items
            const sorted = [...this.filteredProjects].sort((a, b) => b.id - a.id);
            return sorted.slice(0, 3);
          }
        }

      }).mount('#app');

              const container = document.getElementById("skills-container");
        const skills = Array.from(document.querySelectorAll(".skill"));

        // Initialize skill positions and velocities
        skills.forEach(skill => {
          const rect = skill.getBoundingClientRect();
          skill.width = rect.width;
          skill.height = rect.height;

          skill.x = Math.random() * (container.clientWidth - skill.width);
          skill.y = Math.random() * (container.clientHeight - skill.height);

          skill.vx = (Math.random() - 0.5) * 0.3; // slow horizontal drift
          skill.vy = (Math.random() - 0.5) * 0.3; // slow vertical drift

          skill.isDragging = false;
          skill.style.transform = `translate(${skill.x}px, ${skill.y}px)`;
        });

        // Dragging support
        skills.forEach(skill => {
          let offsetX = 0, offsetY = 0;

          const startDrag = (clientX, clientY) => {
            skill.isDragging = true;
            offsetX = clientX - skill.x;
            offsetY = clientY - skill.y;
          };

          const dragMove = (clientX, clientY) => {
            if (!skill.isDragging) return;
            skill.x = clientX - offsetX;
            skill.y = clientY - offsetY;

            skill.x = Math.max(0, Math.min(container.clientWidth - skill.width, skill.x));
            skill.y = Math.max(0, Math.min(container.clientHeight - skill.height, skill.y));
          };

          const endDrag = () => skill.isDragging = false;

          // Mouse events
          skill.addEventListener("mousedown", e => startDrag(e.clientX, e.clientY));
          document.addEventListener("mousemove", e => dragMove(e.clientX, e.clientY));
          document.addEventListener("mouseup", endDrag);

          // Touch events
          skill.addEventListener("touchstart", e => {
            const touch = e.touches[0];
            startDrag(touch.clientX, touch.clientY);
          });
          document.addEventListener("touchmove", e => {
            const touch = e.touches[0];
            dragMove(touch.clientX, touch.clientY);
          }, { passive: false });
          document.addEventListener("touchend", endDrag);
        });

        // Collision detection
        function preventOverlap(skill) {
          skills.forEach(other => {
            if (skill === other) return;

            const dx = skill.x - other.x;
            const dy = skill.y - other.y;
            const minDistX = (skill.width + other.width) / 2;
            const minDistY = (skill.height + other.height) / 2;

            if (Math.abs(dx) < minDistX && Math.abs(dy) < minDistY) {
              // Push skills apart
              if (dx !== 0) skill.x += dx > 0 ? 1 : -1;
              if (dy !== 0) skill.y += dy > 0 ? 1 : -1;
            }
          });
        }

        // Animation loop
        function animate() {
          skills.forEach(skill => {
            if (!skill.isDragging) {
              // slow drift
              skill.x += skill.vx;
              skill.y += skill.vy;

              // bounce off walls
              if (skill.x < 0 || skill.x > container.clientWidth - skill.width) skill.vx *= -1;
              if (skill.y < 0 || skill.y > container.clientHeight - skill.height) skill.vy *= -1;

              // keep inside container
              skill.x = Math.max(0, Math.min(container.clientWidth - skill.width, skill.x));
              skill.y = Math.max(0, Math.min(container.clientHeight - skill.height, skill.y));

              // prevent overlapping
              preventOverlap(skill);
            }

            skill.style.transform = `translate(${skill.x}px, ${skill.y}px)`;
          });

          requestAnimationFrame(animate);
        }

        animate();
