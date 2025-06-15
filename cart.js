$(document).ready(function() {
        // Анімація при наведенні на картки
        $('.rating-card').hover(
            function() {
                $(this).css('transform', 'translateY(-10px)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
            }
        );
        
        // Обробка рейтингу
        $(':radio').change(function() {
            const value = this.value;
            const category = $(this).attr('name');
            console.log(`Оцінка ${value} зірок для ${category}`);
            
            // Анімація обраної зірки
            $(this).siblings('.icon').addClass('animated');
            setTimeout(() => {
                $(this).siblings('.icon').removeClass('animated');
            }, 500);
        });
        
        // Обробка кнопки підтвердження
        $('.submit-btn').click(function(e) {
            e.preventDefault();
            const card = $(this).closest('.rating-card');
            card.animate({
                opacity: 0.5
            }, 200, function() {
                card.html('<h2>Дякуємо!</h2><p>Ваш відгук збережено.</p>');
                card.animate({
                    opacity: 1
                }, 200);
            });
        });
    });