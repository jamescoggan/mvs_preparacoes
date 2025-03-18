FROM ruby:3.2

WORKDIR /app

# Create a new clean Gemfile with exact contents
RUN echo 'source "https://rubygems.org"' > Gemfile && \
    echo 'gem "jekyll", "~> 4.3.2"' >> Gemfile && \
    echo 'gem "webrick"' >> Gemfile && \
    echo 'gem "minima"' >> Gemfile && \
    echo 'group :jekyll_plugins do' >> Gemfile && \
    echo '  gem "jekyll-feed", "~> 0.12"' >> Gemfile && \
    echo '  gem "jekyll-seo-tag", "~> 2.8"' >> Gemfile && \
    echo 'end' >> Gemfile

# Install dependencies
RUN bundle install

# Copy site content
COPY _config.yml .
COPY _layouts/ _layouts/
COPY assets/ assets/
COPY index.html .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"] 