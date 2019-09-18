
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

echo -en "${BLUE}Installing @pxblue/highcharts dependencies...\n${NC}"
yarn install
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Building @pxblue/highcharts...\n${NC}"
yarn build
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Installing dependencies... (react)\n${NC}"
cd react-demo
yarn install
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Creating new folder in node_modules... (react)\n${NC}"
rm -rf "./node_modules/@pxblue/highcharts"
mkdir "./node_modules/@pxblue/highcharts"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying @pxblue/highcharts into node_modules...(react)\n${NC}";
cp -r ./../package.json ./node_modules/@pxblue/highcharts/package.json
cp -r ./../dist ./node_modules/@pxblue/highcharts
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Installing dependencies... (angular)\n${NC}"
cd ../angular-demo
yarn install
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Creating new folder in node_modules... (angular)\n${NC}"
rm -rf "./node_modules/@pxblue/highcharts"
mkdir "./node_modules/@pxblue/highcharts"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying @pxblue/highcharts into node_modules...(angular)\n${NC}";
cp -r ./../package.json ./node_modules/@pxblue/highcharts/package.json
cp -r ./../dist ./node_modules/@pxblue/highcharts
echo -e "${GREEN}Done${NC}"

echo -e "${GRAY}Complete${NC}\r\n"