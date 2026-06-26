import pytest
from example import main


def test_main():
    main()
    assert True


@pytest.mark.parametrize(
    "a,b,expected",
    (
        (1, 2, 3),
        (3, 4, 7),
    ),
)
def test_params(a, b, expected):
    assert a + b == expected
