FROM node:14.17.5 as builder

WORKDIR /root

LABEL maintainer="164598724@qq.com"

COPY ./package.json /root/package.json

RUN npm i --registry https://registry.npm.taobao.org

COPY ./tsconfig.json /root/tsconfig.json
COPY ./tsconfig.build.json /root/tsconfig.build.json
COPY ./gulpfile.js /root/gulpfile.js
COPY ./src /root/src

RUN npm run build && npm run gulp

RUN rm -rf ./src \
	&& rm -rf ./tsconfig.json \
	&& rm -rf ./tsconfig.build.json

FROM node:14.17.5 as prod

WORKDIR /root

COPY --from=builder /root/dist /root/dist
COPY --from=builder /root/package.json /root/package.json

RUN npm i --production --registry https://registry.npm.taobao.org

COPY ./entrypoint.sh entrypoint.sh

ENTRYPOINT ["bash", "./entrypoint.sh"]