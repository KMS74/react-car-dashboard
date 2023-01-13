import BasicCard from "../components/BasicCard";
import { CarCard } from "../components/CarCard";
import carImage1 from "../assets/images/car.png";
import carImage2 from "../assets/images/white car.png";
import carImage3 from "../assets/images/mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png";
import { PieChart, Pie, Label, Tooltip, Cell } from "recharts";
import MilesBarChart from "../components/charts/MilesBarChart";
import CarsAreaChart from "../components/charts/CarsAreaChart";
import RadialPieChart from "../components/charts/RadialPieChart";

const energyData = [{ value: 45 }, { value: 55 }];
const rangeData = [{ value: 157 }, { value: 300 }];
const breakFluidData = [{ value: 9 }, { value: 100 }];
const tireWearData = [{ value: 25 }, { value: 100 }];

const DashboardView = () => {
  return (
    <main className="main-container">
      <section className="picharts-section">
        <BasicCard bg="#A162F7">
          <div className="pichart-box">
            <svg
              className="pichart-box__icon pichart-box__icon--purble"
              width="24"
              height="24"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.454168 11.6784L8.25105 0.882735C8.76678 0.168648 9.89342 0.638777 9.74861 1.50764L8.6666 7.99965H12.8701C13.55 7.99965 13.9437 8.76979 13.5457 9.32089L5.74883 20.1166C5.2331 20.8307 4.10646 20.3605 4.25127 19.4917L5.33327 12.9997H1.12974C0.449928 12.9997 0.0561475 12.2295 0.454168 11.6784Z"
                fill="#fff"
              />
            </svg>
            <h2 className="pichart-box__title pichart-box__title--white">
              Energy
            </h2>
            <RadialPieChart
              data={energyData}
              primaryColor="#B37EFC"
              secondaryColor="#fff"
              labelFillColor="#fff"
              labelUnit="%"
            />
          </div>
        </BasicCard>
        <BasicCard>
          <div className="pichart-box">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pichart-box__icon pichart-box__icon--pink"
            >
              <path
                d="M10.4164 18.4215L13.5197 15.3182L12.2237 14.0054L10.6892 15.5399L10.6891 5.65031L12.2236 7.18484L13.5366 5.87188L10.4162 2.7686C10.0581 2.41047 9.46142 2.41047 9.10328 2.7686L6 5.87188L7.31296 7.18484L8.84749 5.65031V15.5399L7.31296 14.0054L6 15.3183L9.10328 18.4216C9.47841 18.7795 10.0581 18.7795 10.4162 18.4214L10.4164 18.4215Z"
                fill="#FF7E86"
              />
            </svg>

            <h2 className="pichart-box__title pichart-box__title--dark">
              Range
            </h2>

            <RadialPieChart
              data={rangeData}
              primaryColor="#FF7E86"
              secondaryColor="#F4F5F9"
              labelFillColor="#242731"
              labelUnit="k %"
            />
          </div>
        </BasicCard>

        <BasicCard>
          <div className="pichart-box">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pichart-box__icon pichart-box__icon--light-purble"
            >
              <path
                d="M10.3835 2.61906C10.3187 2.54352 10.2243 2.5 10.1248 2.5C10.0254 2.5 9.93093 2.54352 9.86621 2.61906C9.62468 2.90149 4 9.61517 4 12.8272C4.018 14.4349 4.67287 15.9699 5.82117 17.0951C6.96948 18.2204 8.51724 18.8442 10.1249 18.8298C11.7326 18.8442 13.2804 18.2204 14.4287 17.0951C15.577 15.9699 16.2319 14.435 16.2499 12.8272C16.2499 9.61517 10.6252 2.90139 10.3837 2.61906H10.3835ZM12.3196 16.9447C12.2727 16.9701 12.2199 16.983 12.1665 16.982C12.0097 16.9811 11.8738 16.8732 11.8375 16.7207C11.8011 16.5681 11.8738 16.4104 12.0134 16.339C12.669 16.015 13.2216 15.5149 13.6092 14.8947C13.9969 14.2744 14.2042 13.5586 14.2081 12.8273C14.2081 12.6394 14.3604 12.4871 14.5484 12.4871C14.7363 12.4871 14.8886 12.6394 14.8886 12.8273C14.8852 13.6845 14.643 14.5237 14.1892 15.2511C13.7354 15.9783 13.0881 16.5647 12.3196 16.9446L12.3196 16.9447Z"
                fill="#A162F7"
              />
            </svg>

            <h2 className="pichart-box__title pichart-box__title--dark">
              Break fluid
            </h2>
            <RadialPieChart
              data={breakFluidData}
              primaryColor="#A162F7"
              secondaryColor="#F4F5F9"
              labelFillColor="#242731"
              labelUnit="%"
            />
          </div>
        </BasicCard>
        <BasicCard>
          <div className="pichart-box">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pichart-box__icon pichart-box__icon--yellow"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1999 20.5C10.7985 20.5 8.62449 20.2815 8.50353 20.2571C5.96584 19.7421 4 15.8689 4 11.5C4 7.13455 5.96318 3.26165 8.49813 2.74288C8.62002 2.71802 10.7984 2.5 11.1996 2.5C14.1819 2.5 16.5995 6.52911 16.5995 11.4997C16.5995 16.4704 14.1819 20.4995 11.1996 20.4995L11.1999 20.5ZM12.1 16.9001C13.5911 16.9001 14.7999 14.4825 14.7999 11.5002C14.7999 8.51789 13.5911 6.10027 12.1 6.10027C10.6088 6.10027 9.39999 8.51789 9.39999 11.5002C9.39999 14.4825 10.6088 16.9001 12.1 16.9001ZM11.3862 7.37427C11.6344 7.1332 11.9056 7.00031 12.1896 7.00031C12.4744 7.00031 12.7463 7.1338 12.9949 7.37622C13.0568 7.43649 12.9679 7.9102 12.7284 8.79733C12.5474 9.4027 12.3678 9.70629 12.1896 9.70795C12.0113 9.70961 11.8328 9.40933 11.654 8.80713C11.4138 7.91186 11.3246 7.43424 11.3862 7.3743L11.3862 7.37427ZM13.5791 8.39443C13.7511 8.88725 13.8875 9.46642 13.9752 10.1161C14.0632 10.7675 14.0944 11.4304 14.0754 12.074C14.0707 12.2341 13.8559 12.1773 13.431 11.9035C13.1355 11.6767 12.96 11.3599 12.9043 10.9528C12.8487 10.5457 12.9122 10.0446 13.0952 9.44942C13.3749 8.62362 13.5363 8.27197 13.5791 8.39443L13.5791 8.39443ZM13.8531 13.7241C13.7114 14.2698 13.5245 14.7606 13.2946 15.1621C13.0643 15.5647 12.8116 15.8409 12.5513 15.9962C12.4865 16.0349 12.4426 15.5261 12.4196 14.47C12.4179 13.7243 12.489 13.2248 12.6328 12.9717C12.7766 12.7184 12.9945 12.7089 13.2863 12.9434C13.6995 13.3283 13.8884 13.5886 13.8531 13.7241L13.8531 13.7241ZM11.8298 15.998C11.5701 15.8425 11.3183 15.5666 11.0884 15.1651C10.858 14.7625 10.6707 14.2703 10.5288 13.7228C10.4935 13.5866 10.6811 13.3289 11.0918 12.9498C11.3863 12.7158 11.6058 12.724 11.7502 12.9747C11.8949 13.2253 11.9659 13.7205 11.9634 14.4604C11.9389 15.5241 11.8943 16.0367 11.8298 15.998L11.8298 15.998ZM10.3052 12.0734C10.2864 11.4314 10.3177 10.7703 10.4056 10.1206C10.4936 9.46928 10.6304 8.88875 10.8031 8.39504C10.846 8.27225 11.0058 8.6218 11.2828 9.44371C11.4663 10.0447 11.5309 10.5493 11.4764 10.9573C11.422 11.3655 11.2481 11.681 10.9547 11.9039C10.5263 12.1764 10.3098 12.2329 10.3053 12.0734L10.3052 12.0734Z"
                fill="#F6CC0D"
              />
            </svg>

            <h2 className="pichart-box__title pichart-box__title--dark">
              Tire Wear
            </h2>
            <RadialPieChart
              data={tireWearData}
              primaryColor="#F6CC0D"
              secondaryColor="#F4F5F9"
              labelFillColor="#242731"
              labelUnit="%"
            />
          </div>
        </BasicCard>
      </section>
      <section className="statistics-section">
        <BasicCard>
          <div className="statistics-box statistics-box--miles">
            <h2 className="statistics-box__title">
              <strong>Miles </strong>Statistics
            </h2>
            <div className="statistics-box__date">
              <ul className="tabs">
                <li className="tabs__item tabs__item--active">Day</li>
                <li className="tabs__item">Weak</li>
                <li className="tabs__item">Month</li>
              </ul>
              <span>256 miles</span>
            </div>
            <MilesBarChart />
          </div>
        </BasicCard>
        <BasicCard>
          <div className="statistics-box statistics-box--cars">
            <h2 className="statistics-box__title">
              <strong>Cars </strong>Statistics
            </h2>
            <div className="statistics-box__date">
              <ul className="tabs">
                <li className="tabs__item tabs__item--active">Day</li>
                <li className="tabs__item">Weak</li>
                <li className="tabs__item">Month</li>
              </ul>
              <span>20 February 2022</span>
            </div>
            <CarsAreaChart />
          </div>
        </BasicCard>
      </section>
      <section className="cars-section">
        <CarCard bg="#E1DFA4" carImage={carImage1} />
        <CarCard bg="#E3ECF1" carImage={carImage2} />
        <CarCard bg="#F4E3E5" carImage={carImage3} />
      </section>
    </main>
  );
};

export default DashboardView;
