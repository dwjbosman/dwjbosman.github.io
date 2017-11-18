build:
	export JEKYLL_VERSION=3.5 ; docker run --rm --volume="$$PWD:/srv/jekyll" --volume="$$PWD/vendor/bundle:/usr/local/bundle" -it jekyll/builder:$$JEKYLL_VERSION jekyll build
	#export JEKYLL_VERSION=3.5 ; docker run --rm --volume="$$PWD:/srv/jekyll" -it jekyll/builder:$$JEKYLL_VERSION jekyll build

serve:
	export JEKYLL_VERSION=3.5 ; docker run --rm --volume="$$PWD:/srv/jekyll" --volume="$$PWD/vendor/bundle:/usr/local/bundle" -p 4000:4000 -it jekyll/builder:$$JEKYLL_VERSION jekyll serve

update:
	export JEKYLL_VERSION=3.5 ; docker run --rm --volume="$$PWD:/srv/jekyll" --volume="$$PWD/vendor/bundle:/usr/local/bundle" -it jekyll/builder:$$JEKYLL_VERSION bundle update

