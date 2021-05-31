FROM rust:1.50 as builder
WORKDIR /app
COPY silang silang/
RUN cd silang && \
    cargo install --path .

COPY silang-math silang-math/
RUN cd silang-math && \
    cargo build --release


FROM python:3.9
WORKDIR /app
COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv && \
    pipenv install --system
COPY . .
COPY --from=builder /usr/local/cargo/bin/silang /silang/
COPY --from=builder /app/silang-math/target/release/libmath.so /silang/

CMD gunicorn -c gunicorn.py server:app
