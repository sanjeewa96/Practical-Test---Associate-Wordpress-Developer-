//Stepper animation 

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-number');
    const firstStep = document.querySelector('.step-number'); 
  
    steps.forEach((step) => {
      
      step.addEventListener('mouseenter', () => {
        
        document.querySelectorAll('.step-number.active').forEach((activeStep) => activeStep.classList.remove('active'));
        document.querySelectorAll('.timeline-content h4.step-title.active').forEach((activeTitle) => activeTitle.classList.remove('active'));
        document.querySelectorAll('.vertical-line .line.active').forEach((activeLine) => activeLine.classList.remove('active'));
  
        
        step.classList.add('active');
        step.closest('tr').querySelector('.timeline-content h4.step-title').classList.add('active');
        document.querySelector('.vertical-line .line').classList.add('active');
      });
    });
  
    
    const timelineTable = document.querySelector('.timeline-table');
    timelineTable.addEventListener('mouseleave', () => {
      
      document.querySelectorAll('.step-number.active').forEach((activeStep) => activeStep.classList.remove('active'));
      document.querySelectorAll('.timeline-content h4.step-title.active').forEach((activeTitle) => activeTitle.classList.remove('active'));
      document.querySelectorAll('.vertical-line .line.active').forEach((activeLine) => activeLine.classList.remove('active'));
  
     
      firstStep.classList.add('active');
      firstStep.closest('tr').querySelector('.timeline-content h4.step-title').classList.add('active');
      document.querySelector('.vertical-line .line').classList.add('active');
    });
  });
  