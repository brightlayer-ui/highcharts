
#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Installing dependencies...${NC}"
yarn install
cd react-demo && yarn install
cd ../angular-demo && yarn install
cd ..
echo -e "${GREEN}Done${NC}"

echo -e "${BLUE}Building @brightlayer-ui/highcharts...${NC}"
yarn build
echo -e "${GREEN}Done${NC}"


echo -e "${BLUE}Creating new folders in node_modules...${NC}"
rm -rf "./react-demo/node_modules/@brightlayer-ui/highcharts"
mkdir "./react-demo/node_modules/@brightlayer-ui/highcharts"
rm -rf "./angular-demo/node_modules/@brightlayer-ui/highcharts"
mkdir "./angular-demo/node_modules/@brightlayer-ui/highcharts"
echo -e "${GREEN}Done${NC}"

echo -e "${BLUE}Linking @brightlayer-ui/highcharts into node_modules...${NC}";
cp -r ./package.json ./react-demo/node_modules/@brightlayer-ui/highcharts/package.json
cp -r ./package.json ./angular-demo/node_modules/@brightlayer-ui/highcharts/package.json
cp -r ./dist ./react-demo/node_modules/@brightlayer-ui/highcharts
cp -r ./dist ./angular-demo/node_modules/@brightlayer-ui/highcharts

echo -e "${GREEN}Done${NC}"

echo -e "${GRAY}Linking Complete${NC}\r\n"