from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    product_type = models.CharField(max_length=50)
    quantity = models.PositiveIntegerField()
    min_threshold = models.PositiveIntegerField()

    def __str__(self):
        return self.name
