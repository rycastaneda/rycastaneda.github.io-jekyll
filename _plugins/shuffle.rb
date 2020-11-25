# _plugins/shuffle.rb
module Jekyll::CustomFilter
    def shuffle(array)
    array.shuffle
    end
end

Liquid::Template.register_filter(Jekyll::ShuffleFilter)