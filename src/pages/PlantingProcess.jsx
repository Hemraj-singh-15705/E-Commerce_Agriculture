import React from 'react';
import './PlantingProcess.css'; // Import the CSS file for styling

const PlantingProcess = () => {
  return (
    <div className="planting-process-container">
      <h1>Process of Planting</h1>
      <div className="process-steps">
        {/* Step 1 */}
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Soil Preparation</h2>
            <p>
              Prepare the soil by tilling and adding organic compost or fertilizers to ensure it is
              nutrient-rich and well-drained.
            </p>
            <img
              src="https://media.istockphoto.com/id/1219389664/photo/hand-holding-compost-with-redworms-a-farmer-showing-the-worms-in-his-hands-at-chuadanga.jpg?s=612x612&w=0&k=20&c=0XSxaK_XpjFq_CkjbaDKfMfaKqPxXpcg3PEOrXrS94A="
              alt="Soil Preparation"
              className="step-image"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Seed Selection</h2>
            <p>
              Choose high-quality seeds that are suitable for the climate and soil conditions of your
              region.
            </p>
            <img
              src="https://media.istockphoto.com/id/157647284/photo/spoons-and-healthy-seeds.jpg?s=612x612&w=0&k=20&c=aF8swqgt9njLSwlpOV-A3LD7O3MDCN1ybcZ-2VEl1Js="
              alt="Seed Selection"
              className="step-image"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Planting</h2>
            <p>
              Plant the seeds at the appropriate depth and spacing. Water them immediately after
              planting.
            </p>
            <img
              src="https://media.istockphoto.com/id/1077165502/video/adult-hands-putting-young-plant-in-to-little-girls-hands.jpg?s=640x640&k=20&c=avy5gbw3jW3PHWEPWF_7ZsEldfA2qfJPb1bCVq-r5sg="
              alt="Planting"
              className="step-image"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h2>Watering and Care</h2>
            <p>
              Water the plants regularly and provide necessary care, such as weeding and pest
              control.
            </p>
            <img
              src="https://media.istockphoto.com/id/1129164270/video/hand-watering-a-young-plant.jpg?s=640x640&k=20&c=BhSXB8O_au3X9K2kLJ4RUopbTn5p5TCyPrEXaM5DS7I="
              alt="Watering and Care"
              className="step-image"
            />
          </div>
        </div>

        {/* Step 5 */}
        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h2>Harvesting</h2>
            <p>
              Harvest the crops when they are fully mature. Enjoy the fruits of your labor!
            </p>
            <img
              src="https://media.istockphoto.com/id/2171188663/video/aerial-view-of-combine-harvester-machine-with-rice-paddy-field-harvester-for-harvesting-rice.jpg?s=640x640&k=20&c=P38fo0VqJ5v9KLHLdsuSMyVSBBXp6wRcGcpIiVbjo6w="
              alt="Harvesting"
              className="step-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantingProcess;
