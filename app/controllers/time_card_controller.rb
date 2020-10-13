class TimeCardController < ApplicationController
  def index
    puts "hello works"
  end
  
  def show 
   @time_cards = Time_card.all
  end

  def time_card_in
    # @time_card  = Time_card.new()
    # @date  = Date.today
    # @start_time = Time.now
    render "/time_card/index"
  end

  def time_card_out
    # @end_time = Time.now
    render "/time_card/index"
  end

  def working_calculation
    # if @start_time && @end_time
    #   work_time = @end_time - @start_time
    # end
  end
end
